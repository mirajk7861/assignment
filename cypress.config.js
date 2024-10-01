const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://growth.deel.training/dev/salary-insights',  // Base URL for application
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,

    setupNodeEvents(on, config) {
      // Adding Mochawesome plugin to node events
      require('cypress-mochawesome-reporter/plugin')(on);

      // Existing or other custom setup can remain here
      return config;
    },

    // Add Mochawesome as the reporter
    reporter: 'cypress-mochawesome-reporter',

    // Configure Mochawesome reporter options
    reporterOptions: {
      reportDir: 'cypress/reports',        // Directory for reports
      overwrite: false,                    // Do not overwrite existing reports
      html: true,                          // Generate HTML reports
      json: true,                          // Generate JSON reports
      charts: true,                        // Include charts in the reports
      reportTitle: 'Cypress Test Report',  // Custom report title
      embeddedScreenshots: true,           // Embed screenshots in the report
      inlineAssets: true,                  // Inline CSS and JS for self-contained reports
    },
  },
});

