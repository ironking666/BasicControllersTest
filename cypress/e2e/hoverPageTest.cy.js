import HomePage from "../page-objects/homePage";
import HoversPage from "../page-objects/hoversPage";

describe("hover page test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test hover list", () => {
    const homePage = new HomePage();
    homePage.clickHoverTab();

    const hoverPage = new HoversPage();
    hoverPage.hoverOverElement();
  });
});
