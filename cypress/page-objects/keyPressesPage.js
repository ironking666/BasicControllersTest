const targetInput = "#target";
const keyPressResult = "#keyPressResult";

class KeyPresses {
  simulationOfPressingTheEnterKey() {
    cy.get(targetInput).type("{enter}");
    cy.get(keyPressResult).should("contain", "ENTER");
  }

  simulationOfPressingTheBackspaceKey() {
    cy.get(targetInput).type("{backspace}");
    cy.get(keyPressResult).should("contain", "BACK_SPACE");
  }
}
export default KeyPresses;
