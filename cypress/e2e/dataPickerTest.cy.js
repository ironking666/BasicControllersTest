import HomePage from "../page-objects/homePage";
import DataPickerPage from "../page-objects/dataPickerPage";

describe("input tab tests", () => {
  it("should test data picker input field with correct data", () => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickDatePickerTab();
    const dataPicker = new DataPickerPage();
    dataPicker.typeDataInPicker();
  });
});
