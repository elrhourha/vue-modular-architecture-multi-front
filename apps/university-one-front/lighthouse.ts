import { ChildProcessWithoutNullStreams, spawn } from 'child_process'
import { unlinkSync, writeFileSync } from 'fs'
import lighthouse from 'lighthouse'
import puppeteer from 'puppeteer'
import waitOn from 'wait-on'

// List of pages to check
const PAGES = ['/users']
const reportFiles: string[] = []

async function runLighthouse(url: string) {
  const browser = await puppeteer.launch({ headless: true })
  console.log(`Running Lighthouse on ${url}...`)

  const { lhr } = await lighthouse(url, {
    port: Number(new URL(browser.wsEndpoint()).port),
    output: 'json',
    onlyCategories: ['accessibility'],
  })

  await browser.close()

  const reportFile = `lighthouse-report-${url.replace(/\//g, '_')}.json`
  writeFileSync(reportFile, JSON.stringify(lhr, null, 2))
  reportFiles.push(reportFile)

  const score = lhr.categories.accessibility.score * 100
  console.log(`✅ ${url} accessibility score: ${score}`)

  if (score < 90) {
    console.error(`❌ Accessibility score is below 90 for ${url}. Fix issues before pushing.`)

    // Extract failed audits
    const failedAudits = Object.values(lhr.audits)
      .filter((audit) => audit.score !== undefined && audit.score < 1) // Only failed ones
      .map((audit) => {
        console.log(audit.details)
        return {
          id: audit.id,
          title: audit.title,
          description: audit.description,
        }
      })

    // Log issues in a readable format
    console.log(`\n🚨 ${failedAudits.length} accessibility issues found:`)
    failedAudits.forEach((audit, index) => {
      console.log(`\n🔹 Issue ${index + 1}: ${audit.title}`)
      console.log(`   📌 Description: ${audit.description}`)
    })

    process.exit(1)
  }
}

async function startServer(): Promise<ChildProcessWithoutNullStreams> {
  console.log('Starting local server...')
  const serverProcess = spawn('npx', ['http-server', 'dist', '-p', '4000'], { stdio: 'ignore' })

  await waitOn({ resources: ['http://localhost:4000'], timeout: 15000 })
  return serverProcess
}

function cleanUpReports() {
  console.log('🧹 Cleaning up Lighthouse reports...')
  reportFiles.forEach((file) => {
    try {
      unlinkSync(file)
    } catch (error) {
      console.warn(`⚠️ Could not delete ${file}:`, error)
    }
  })
}

async function main() {
  const serverProcess = await startServer()

  try {
    for (const page of PAGES) {
      await runLighthouse(`http://localhost:4000${page}`)
    }
  } catch (error) {
    console.error('Error running Lighthouse:', error)
    process.exit(1)
  } finally {
    console.log('Stopping local server...')
    serverProcess.kill()
    cleanUpReports()
  }
}

main()
