import HomePage from "../page-objects/homePage";
import DropdownListPage from "../page-objects/dropdownListPage";

describe("dropdown page test", () => {
  it("test dropdown list", () => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickDropdownListTab();
    const dropdownPage = new DropdownListPage();
    dropdownPage.chooseDropdownListFirstOption();
  });
});
