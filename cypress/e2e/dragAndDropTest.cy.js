import HomePage from "../page-objects/homePage";
import DragAndDropTab from "../page-objects/dragAndDropPage";

describe("status codes page tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should move A column to B column", () => {
    const homePage = new HomePage();
    homePage.clickDragAndDropTab();
    const dragAndDrop = new DragAndDropTab();
    dragAndDrop.moveColumn();
  });
});
