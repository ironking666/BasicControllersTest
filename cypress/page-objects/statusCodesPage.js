const urlCode200 = "http://httpstat.us/200";
const urlCode305 = "http://httpstat.us/305";
const urlCode404 = "http://httpstat.us/404";
const urlCode500 = "http://httpstat.us/500";

class StatusCode {
  checkStatusCode200() {
    cy.request(urlCode200).then((response) => {
      expect(response.body).to.equal("200 OK");
    });
  }
  checkStatusCode305() {
    cy.request({ url: urlCode305, followRedirect: false }).then((response) => {
      expect(response.body).to.equal("305 Use Proxy");
    });
  }
  checkStatusCode404() {
    cy.request({ url: urlCode404, failOnStatusCode: false }).then(
      (response) => {
        expect(response.body).to.equal("404 Not Found");
      }
    );
  }

  checkStatusCode500() {
    cy.request({ url: urlCode500, failOnStatusCode: false }).then(
      (response) => {
        expect(response.body).to.equal("500 Internal Server Error");
      }
    );
  }
}

export default StatusCode;
