// @ts-ignore
import fs from 'fs'
import { USERS_LIST_ROUTE_PATH } from '../src/modules/users'

const routes = [USERS_LIST_ROUTE_PATH]

const outputPath = '.lighthouse/static-routes.json'
fs.writeFileSync(outputPath, JSON.stringify(routes, null, 2))

console.log(`Static routes saved to ${outputPath}`)
