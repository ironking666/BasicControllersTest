const firstNameId = "#fname";
const lastNameId = "#lname";
const submitButton = "#formSubmitButton";

class FormPage {
  correctDataSubmit() {
    cy.get(firstNameId).clear();
    cy.get(firstNameId).type("Test");
    cy.get(lastNameId).clear();
    cy.get(lastNameId).type("Test");
    cy.get(submitButton).click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("success");
    });
  }
}

export default FormPage;
