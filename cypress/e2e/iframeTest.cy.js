import HomePage from "../page-objects/homePage";
import IframePage from "../page-objects/iframePage";

describe("iframe tab test", () => {
  beforeEach(() => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickIFrameTab();
  });
  it("should click on button 1 in iframe", () => {
    const iframe = new IframePage();
    iframe.clickButton1();
  });
  it("should click on button 2 in iframe", () => {
    const iframe = new IframePage();
    iframe.clickButton2();
  });
});
