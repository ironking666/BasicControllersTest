import HomePage from "../page-objects/homePage";
import FormPage from "../page-objects/formPage";

describe("form page test", () => {
  it("should submit with correct data and get success window", () => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickFormTab();
    const formPage = new FormPage();
    formPage.correctDataSubmit();
  });
});
