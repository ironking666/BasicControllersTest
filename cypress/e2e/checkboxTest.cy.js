import HomePage from "../page-objects/homePage";
import CheckboxPage from "../page-objects/checkboxPage";

describe("checkbox tab tests", () => {
  beforeEach(() => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickCheckboxTab();
  });

  it("should test check checkbox", () => {
    const checkboxPage = new CheckboxPage();
    checkboxPage.checkFirstCheckbox();
  });
  it("should test uncheck checkbox", () => {
    const checkboxPage = new CheckboxPage();
    checkboxPage.uncheckedLastCheckbox();
  });
});
