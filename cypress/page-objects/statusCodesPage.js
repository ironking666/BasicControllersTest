const url = "http://httpstat.us/";

class StatusCode {
  checkStatusCode200() {
    cy.request(url + "200").then((response) => {
      expect(response.body).to.equal("200 OK");
    });
  }
  checkStatusCode305() {
    cy.request({ url: url + "305", followRedirect: false }).then((response) => {
      expect(response.body).to.equal("305 Use Proxy");
    });
  }
  checkStatusCode404() {
    cy.request({ url: url + "404", failOnStatusCode: false }).then(
      (response) => {
        expect(response.body).to.equal("404 Not Found");
      }
    );
  }

  checkStatusCode500() {
    cy.request({ url: url + "500", failOnStatusCode: false }).then(
      (response) => {
        expect(response.body).to.equal("500 Internal Server Error");
      }
    );
  }
}

export default StatusCode;
