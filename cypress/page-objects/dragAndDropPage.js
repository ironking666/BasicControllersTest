const aColumn = "#column-a";
const bColumn = "#column-b";
const dataTransfer = new DataTransfer();

class DragAndDropTab {
  moveColumn() {
    cy.get(aColumn).trigger("dragstart", { dataTransfer });
    cy.get(bColumn).trigger("drop", { dataTransfer }).should("contain", "A");
  }
}
export default DragAndDropTab;
