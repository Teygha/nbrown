const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  fixturesFolder: "fixtures",
  pageLoadTimeout: 60000,
  viewportHeight: 850,
  viewportWidth: 1500,
  chromeWebSecurity: false,
  video: false,
  retries: {
    "runMode": 1,
    "openMode": 1
  },
     // Add the mochawesome reporter
     reporter: 'cypress-mochawesome-reporter',
     reporterOptions: {
       reportDir: 'cypress/reports', // Where the reports will be saved
       overwrite: false,
       html: true,
       json: true,
       charts: true
     },
     setupNodeEvents(on, config) {
       // Implement node event listeners for mochawesome
       require('cypress-mochawesome-reporter/plugin')(on);
     },

  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter')
    module.exports = (on, config) => {
  installLogsPrinter(on);
};
    },

    env:{
  
    },
    baseUrl:
    'https://www.boohoo.com/'
  },
});