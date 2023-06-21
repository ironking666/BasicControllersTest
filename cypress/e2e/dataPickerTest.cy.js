import HomePage from "../page-objects/homePage";
import DataPickerPage from "../page-objects/dataPickerPage";

describe("input tab tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should test data picker input field with correct data", () => {
    const homePage = new HomePage();
    homePage.clickDatePickerTab();
    const dataPicker = new DataPickerPage();
    dataPicker.typeDataInPicker();
  });
});
