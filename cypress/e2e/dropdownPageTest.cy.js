import HomePage from "../page-objects/homePage";
import DropdownListPage from "../page-objects/dropdownListPage";

describe("dropdown page test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test dropdown list", () => {
    const homePage = new HomePage();
    homePage.clickDropdownListTab();
    const dropdownPage = new DropdownListPage();
    dropdownPage.chooseDropdownListFirstOption();
  });
});
