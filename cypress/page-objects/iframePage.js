const button1 = "#simpleButton1";
const button2 = "#simpleButton2";
const whichButtonMessage = "#whichButtonIsClickedMessage";
const iframeOnPage = "iframe";
const wrapIframe = () => {
  return cy.get(iframeOnPage).its("0.contentDocument.body").then(cy.wrap);
};

class IframePage {
  clickButton1() {
    wrapIframe().find(button1).click();

    wrapIframe()
      .find(whichButtonMessage)
      .should("have.text", "Button 1 was clicked!");
  }
  clickButton2() {
    wrapIframe().find(button2).click();

    wrapIframe()
      .find(whichButtonMessage)
      .should("have.text", "Button 2 was clicked!");
  }
}
export default IframePage;
