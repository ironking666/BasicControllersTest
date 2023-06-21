const addElementButton = ".example > button";
const removeElementButton = ".added-manually";

class AddRemoveElements {
  addElement() {
    cy.get(addElementButton).click();
    cy.get(removeElementButton).should("be.visible");
  }

  removeElement() {
    this.addElement();
    cy.get(removeElementButton).click();
    cy.get(removeElementButton).should("not.exist");
  }
}
export default AddRemoveElements;
