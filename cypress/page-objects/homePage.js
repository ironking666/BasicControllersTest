import Urls from "./urls";

const inputHeader = "#inputs-header";
const checkboxHeader = "#checkbox-header";
const dropdownListHeader = "#dropdownlist-header";
const hoversHeader = "#hovers-header";

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

  visitPage() {
    const url = new Urls();
    url.visitHomePage();
  }
}

export default HomePage;