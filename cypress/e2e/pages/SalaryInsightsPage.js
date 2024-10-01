import { DEEL_SALARY_INSIGHT_URL } from "../config/CONSTANTS";

class SalaryInsightsPage {
    // Method to navigate to the Salary Insights Tool page
    visit() {
      cy.visit(`${DEEL_SALARY_INSIGHT_URL}`); // Update the path according to your app's URL
    }
  
    // Method to select a role from the dropdown
    selectRole(role) {
      cy.xpath("//input[@name='role']").click()
      .focus()
      .click();
      cy.wait(2000);
      cy.xpath("//div[@data-qa='role-field']/div/div/div").click()
      .wait(1000);
      cy.xpath("//input[@name='role']").click()
      .focus()
      .type(role);
      cy.xpath("//div[text()='"+role+"']").click();
      cy.wait(2000); // Optional: use a wait time to allow the dropdown to render
      cy.log('selected role',role);
    }
  
    // Method to select a country from the dropdown
    selectCountry(country) {
      cy.xpath("//input[@name='country']").click()
      .type(country)
      .wait(2000); 
      cy.xpath("//div[@class='MuiGrid-root MuiGrid-container css-sow6z2']//p[text()='"+country+"']").click();
      cy.log('selected country', country);
    }
  
    // Method to click the Search button
    clickSearch() {
      //cy.xpath("//button[contains(text(),'Search')]").click(); // XPath for the search button
      cy.get('button[type="submit"]').click({ force: true });
      console.log('clicked search:');
      cy.wait(2000);
    }
  
    verifyTitle(expectedRole, expectedCountry) {
      cy.xpath(".//div[@data-qa='salary-table']/h2")
        .invoke('text')        // Get the text content
        .then((text) => {
        // Check if both role and country are part of the title
        expect(text.trim()).to.include(expectedRole);     // Check for role in the title
        expect(text.trim()).to.include(expectedCountry);  // Check for country in the title
        console.log('text from chart title: ', text);
        });
      }
  }
  
  export default SalaryInsightsPage;
  