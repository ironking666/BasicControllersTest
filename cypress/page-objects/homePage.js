import Urls from "./urls";

const inputHeader = "#inputs-header";
const checkboxHeader = "#checkbox-header";
const dropdownListHeader = "#dropdownlist-header";
const hoversHeader = "#hovers-header";
const basicAuthHeader = "#basicauth-header";
const formHeader = "#form-header";
const keyPressesHeader = "#keypresses-header";
const addRemoveElementsHeader = "#addremoveelements-header";
const statusCodesHeader = "#statuscodes-header";
const iFrameHeader = "#iframe-header";
const datePickerHeader = "#datepicker-header";

class HomePage {
  clickInputTab() {
    cy.get(inputHeader).click();
  }

  clickCheckboxTab() {
    cy.get(checkboxHeader).click();
  }

  clickDropdownListTab() {
    cy.get(dropdownListHeader).click();
  }

  clickHoverTab() {
    cy.get(hoversHeader).click();
  }

  clickBasicAuthTab() {
    cy.get(basicAuthHeader).click();
  }

  clickFormTab() {
    cy.get(formHeader).click();
  }
  clickKeyPressesTab() {
    cy.get(keyPressesHeader).click();
  }

  clickAddElementTab() {
    cy.get(addRemoveElementsHeader).click();
  }
  clickStatusCodesTab() {
    cy.get(statusCodesHeader).click();
  }
  clickIFrameTab() {
    cy.get(iFrameHeader).click();
  }
  clickDatePickerTab() {
    cy.get(datePickerHeader).click();
  }

  visitPage() {
    const url = new Urls();
    url.visitHomePage();
  }
}

export default HomePage;
