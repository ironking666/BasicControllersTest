const input = 'input[type="number"]';

class InputPage {
  typeNumberIntoField() {
    cy.get(input).clear();
    cy.get(input).type("6678").should("have.value", "6678");
  }

  typeLettersIntoField() {
    cy.get(input).clear();
    cy.get(input).type("Abcd").should("not.have.value", "Abcd");
  }
}

export default InputPage;
