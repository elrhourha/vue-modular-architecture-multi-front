const puppeteer = require('puppeteer')
const staticRoutes = require('./static-routes.json')
const dynamicRoutes = require('./dynamic-routes.json')

module.exports = {
  ci: {
    collect: {
      chromePath: puppeteer.executablePath(),
      staticDistDir: 'dist',
      url: [...staticRoutes, ...dynamicRoutes],
      onlyCategories: ['accessibility'],
      numberOfRuns: 1,
      isSinglePageApplication: true,
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
