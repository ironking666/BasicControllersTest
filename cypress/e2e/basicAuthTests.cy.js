import HomePage from "../page-objects/homePage";
import BasicAuthPage from "../page-objects/basicAuthPage";

describe("dropdown page test", () => {
  beforeEach(() => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickBasicAuthHeader();
  });
  it("should log in with correct data", () => {
    const basicAuthPage = new BasicAuthPage();
    basicAuthPage.correctDataAuthentication();
  });

  it("should not log in with incorrect data", () => {
    const basicAuthPage = new BasicAuthPage();
    basicAuthPage.incorrectDataAuthentication();
  });

  it("should not log in with empty fields", () => {
    const basicAuthPage = new BasicAuthPage();
    basicAuthPage.incorrectDataAuthenticationEmptyFields();
  });
});
