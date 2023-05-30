import HomePage from "../page-objects/homePage";
import KeyPresses from "../page-objects/keyPressesPage";

describe("key presses page test", () => {
  beforeEach(() => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickKeyPressesTab();
  });
  it("should simulate enter key press", () => {
    const keyPress = new KeyPresses();
    keyPress.simulationOfPressingTheEnterKey();
  });
  it("should simulate backspace key press", () => {
    const keyPress = new KeyPresses();
    keyPress.simulationOfPressingTheBackspaceKey();
  });
});
