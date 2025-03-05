const { defineConfig } = require('cypress')

// Populate process.env with values from .env file
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://reqres.in/',
    chromeWebSecurity: false,
  },
})
