const puppeteer = require('puppeteer')
const staticRoutes = require('./static-routes.json')
const dynamicRoutes = require('./dynamic-routes.json')

module.exports = {
  ci: {
    collect: {
      chromePath: puppeteer.executablePath(),
      staticDistDir: 'dist',
      url: [...staticRoutes, ...dynamicRoutes],
      numberOfRuns: 1,
      isSinglePageApplication: true,
      settings: {
        onlyCategories: ['accessibility'],
      },
    },
    assert: {
      assertions: {
        'categories:performance': 'off',
        'categories:pwa': 'off',
        'categories:accessibility': ['error', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
