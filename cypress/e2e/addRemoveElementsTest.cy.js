import HomePage from "../page-objects/homePage";
import AddRemoveElements from "../page-objects/addRemoveElementsPage";

describe("add and remove elelements", () => {
  beforeEach(() => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickAddElementTab();
  });
  it("should add element", () => {
    const addRemoveElements = new AddRemoveElements();
    addRemoveElements.addElement();
  });

  it("should remove element", () => {
    const addRemoveElements = new AddRemoveElements();
    addRemoveElements.removeElement();
  });
});
