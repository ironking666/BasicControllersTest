import InputPage from "../page-objects/inputPage";
import HomePage from "../page-objects/homePage";

describe("input tab tests", () => {
  beforeEach(() => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickInputTab();
  });
  it("should test input field with numbers", () => {
    const inputPage = new InputPage();
    inputPage.typeNumberIntoField();
  });

  it("should test input field with letters", () => {
    const inputPage = new InputPage();
    inputPage.typeLettersIntoField();
  });
});
