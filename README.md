**Step 1: Install Node.js (if not already installed)**
Cypress and npm come with Node.js, so you'll need to install node.js first.
  1.	Download Node.js:
  Go to Node.js official website and download the latest stable version for your operating system.
  2.	Install Node.js:
  Follow the installation instructions. Ensure that during installation, the option "Add to PATH" is checked. This will ensure npm is added to your environment variables automatically.
  3.	Verify Installation: After installation, verify that Node.js and npm were installed correctly by running these commands in your terminal (Command Prompt or PowerShell):
      node -v
      npm -v
**Step 2: Install Cypress **
  1.	Install Cypress locally in your project by running:
        npm install cypress --save-dev
  Once installed, confirm that Cypress is listed in your node_modules folder by running:
  ls node_modules/.bin
  2.	Install Cypress Globally: Cypress is usually installed locally to the project, but if you want to use it globally, you can install it globally by running:
      npm install -g cypress

**Step 3: Install the Cypress XPath plugin, follow these steps:**
  1.	Install Cypress XPath Plugin via npm: Run the following command in your project directory to install the Cypress XPath plugin:
  npm install -D cypress-xpath
  2.	Import the Plugin: After installing the plugin, you need to import it into your Cypress configuration. Open your cypress/support/e2e.js or cypress/support/index.js file and add the following line:
  require('cypress-xpath');
  3.	Using XPath Selectors in Tests: Now, you can use XPath selectors in your tests like this:
  cy.xpath('//button[text()="Submit"]').click();
  
**Step 4: Configure Reporting using Mochawesome:**
  The Mochawesome reporter is a powerful reporting tool for Cypress, providing detailed and visually appealing reports in both HTML and JSON formats. Here's how you can integrate it step by step into your Cypress project.
  1: Install Mochawesome and Dependencies
  You need to install the cypress-mochawesome-reporter package to enable Mochawesome as your test reporter.
  Run the following command in your Cypress project directory:
  npm install --save-dev cypress-mochawesome-reporter
  This will install the reporter and its dependencies, making it available for use in your Cypress tests.
  2: Configure Cypress to Use Mochawesome
  Next, you need to configure Cypress to use Mochawesome as the default test reporter. This is done by updating your cypress.config.js file.
Update cypress.config.js:
Add the following configuration to your cypress.config.js file (if you don’t have the file, create it in the project root directory):
_const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add the Mochawesome plugin
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',  // Set Mochawesome as the reporter
    reporterOptions: {
      reportDir: 'cypress/reports',             // Specify directory for the reports
      overwrite: false,                         // Whether to overwrite existing reports
      html: true,                               // Enable HTML report generation
      json: true,                               // Enable JSON report generation
      charts: true,                             // Include charts in the reports
      reportTitle: 'Cypress Test Report',       // Customize report title
      embeddedScreenshots: true,                // Embed screenshots in the report
      inlineAssets: true,                       // Inline CSS/JS assets for the HTML report
    }
  }
});_

**3: Add Screenshots for Failed Tests (Optional)**
If you'd like to include screenshots of failed tests in the report, you can configure Cypress to take automatic screenshots when tests fail. This is useful for debugging and visually inspecting failures.
In your cypress/support/e2e.js or index.js, add the following code:
_import 'cypress-mochawesome-reporter/register';

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    cy.screenshot(screenshotFileName);
  }
});_

**Step 5: Run Your Tests**
	Now that everything is set up, you can run your Cypress tests as usual, and Mochawesome will generate reports based on the results.
	To run your tests in headless mode (without opening a browser):
	**npx cypress run**__
	Alternatively, to open the Cypress Test Runner (GUI):
	**npx cypress open**__
	This below command is to run single test in chrome browser 
	**npx cypress run --spec "cypress/e2e/login.cy.js" --headed --browser chrome**__

**Step 6: View the Reports**
	After running the tests, Mochawesome will generate reports in the specified directory (cypress/reports by default). The reports will include both HTML and JSON files.
	•	HTML Report: You can open the .html file in your browser to view the detailed test report with embedded screenshots and charts.
	•	JSON Report: This can be used for further processing or combined with other reports.
	To run tests in this project:

_1. Navigate to your directory\Make my\Make my
2. Run the command : npx cypress run --spec "cypress/e2e/tests/test_salary_insight_spec.cy.js" --headed --browser chrome
3. Then the tests will open in browser and once the test executed the reports are generated at directory\Make my\Make my\reports\index.html_


