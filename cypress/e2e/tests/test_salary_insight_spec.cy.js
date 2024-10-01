// cypress/e2e/salarySearch.spec.js
import SalaryInsightsPage from "../pages/SalaryInsightsPage";

describe('Salary Insights Tool Search for Each Role and Location', () => {
  const salaryInsightsPage = new SalaryInsightsPage();

  beforeEach(() => {
    cy.log('Starting a new test');
    salaryInsightsPage.visit();
    
  });

  it('Searches for each role and country combination', () => {
    // Load the roles and countries from the testData file
    cy.fixture('testData').then((data) => {
      // Iterate over each role and country combination
      data.testCases.forEach((testCase) => {
        // select role 
        salaryInsightsPage.selectRole(testCase.input.role);
        // select country
        salaryInsightsPage.selectCountry(testCase.input.country);
        // Click search 
        salaryInsightsPage.clickSearch();
        // Validate that the table title shows selected role and country
        salaryInsightsPage.verifyTitle(testCase.expected.role, testCase.expected.country)
    });
});
});
});
