import HomePage from "../page-objects/homePage";
import FormPage from "../page-objects/formPage";

describe("form page test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should submit with correct data and get success window", () => {
    const homePage = new HomePage();
    homePage.clickFormTab();

    const formPage = new FormPage();
    formPage.correctDataSubmit();
  });
});
