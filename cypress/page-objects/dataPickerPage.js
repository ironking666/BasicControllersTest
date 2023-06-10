const dateInput = "#start";

class DataPicker {
  typeDataInPicker() {
    cy.get(dateInput).clear();
    cy.get(dateInput).type("2020-12-12").should("have.value", "2020-12-12");
  }
}
export default DataPicker;
