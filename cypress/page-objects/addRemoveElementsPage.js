const addElementButton = ':contains("Add Element")';
const removeElementButton = ':contains("Delete")';

class AddRemoveElements {
  addElement() {
    cy.get("button" + addElementButton).click();
    cy.get("button" + removeElementButton).should("be.visible");
  }

  removeElement() {
    this.addElement();
    cy.get("button" + removeElementButton).click();
    cy.get("button" + removeElementButton).should("not.exist");
  }
}
export default AddRemoveElements;
