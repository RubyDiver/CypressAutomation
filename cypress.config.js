const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tp4w8f',
  defaultCommandTimeout: 5000,

  env: {
    url: 'https://rahulshettyacademy.com/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
  },
});
