const usernameInput = "#ba_username";
const passwordInput = "#ba_password";
const loginButton = ':contains("Login")';
const correctLoggedInInfo = "#loggedInMessage";
const invalidCredentialsMessage = "#loginFormMessage";

class BasicAuthPage {
  correctDataAuthentication() {
    cy.get(usernameInput).clear();
    cy.get(usernameInput).type("admin");
    cy.get(passwordInput).clear();
    cy.get(passwordInput).type("admin");
    cy.get("button" + loginButton).click();
    cy.get(correctLoggedInInfo).should("be.visible");
  }

  incorrectDataAuthentication() {
    cy.get(usernameInput).clear();
    cy.get(usernameInput).type("Tester");
    cy.get(passwordInput).clear();
    cy.get(passwordInput).type("Test");
    cy.get("button" + loginButton).click();
    cy.get(invalidCredentialsMessage).should("be.visible");
  }

  incorrectDataAuthenticationEmptyFields() {
    cy.get(usernameInput).clear().should("be.empty");
    cy.get(passwordInput).clear().should("be.empty");
    cy.get("button" + loginButton).click();
    cy.get(invalidCredentialsMessage).should("be.visible");
  }
}
export default BasicAuthPage;
