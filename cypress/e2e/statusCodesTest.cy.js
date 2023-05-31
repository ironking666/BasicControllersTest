import HomePage from "../page-objects/homePage";
import StatusCode from "../page-objects/statusCodesPage";

describe("status codes page tests", () => {
  beforeEach(() => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickStatusCodesTab();
  });
  it("should check status code 200", () => {
    const statusCodes = new StatusCode();
    statusCodes.checkStatusCode200();
  });
  it("should check status code 305", () => {
    const statusCodes = new StatusCode();
    statusCodes.checkStatusCode305();
  });
  it("should check status code 404", () => {
    const statusCodes = new StatusCode();
    statusCodes.checkStatusCode404();
  });
  it("should check status code 500", () => {
    const statusCodes = new StatusCode();
    statusCodes.checkStatusCode500();
  });
});
