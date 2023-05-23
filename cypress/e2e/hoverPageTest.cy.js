import HomePage from "../page-objects/homePage";
import HoversPage from "../page-objects/hoversPage";

describe("hover page test", () => {
  it("test hover list", () => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickHoverTab();

    const hoverPage = new HoversPage();
    hoverPage.hoverOverElement();
  });
});
