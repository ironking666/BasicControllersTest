import InputPage from "../page-objects/inputPage";
import HomePage from "../page-objects/homePage";
import CheckboxPage from "../page-objects/checkboxPage";

describe("my first scenario", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should test input field", () => {
    const homePage = new HomePage();
    homePage.clickInputTab();

    const inputPage = new InputPage();
    inputPage.typeNumberIntoField();
    inputPage.typeLettersIntoField();
  });

  it("should test checkbox tab", () => {
    const homePage = new HomePage();
    homePage.clickCheckboxTab();

    const checkboxPage = new CheckboxPage();
    checkboxPage.checkFirstCheckbox();
    checkboxPage.uncheckedLastCheckbox();
  });
});
