const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  fixturesFolder: "fixtures",
  pageLoadTimeout: 60000,
  viewportHeight: 850,
  viewportWidth: 1500,
  chromeWebSecurity: true,
  video: false,
  retries: {
    "runMode": 1,
    "openMode": 1
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
    'https://www.asos.com/'
  },
});