import HomePage from "../page-objects/homePage";
import KeyPresses from "../page-objects/keyPressesPage";

describe("key presses page test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should simulate enter key press", () => {
    const homePage = new HomePage();
    homePage.clickKeyPressesTab();

    const keyPress = new KeyPresses();
    keyPress.simulationOfPressingTheEnterKey();
  });
  it("should simulate backspace key press", () => {
    const homePage = new HomePage();
    homePage.clickKeyPressesTab();

    const keyPress = new KeyPresses();
    keyPress.simulationOfPressingTheBackspaceKey();
  });
});
