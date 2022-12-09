// class 2 - iframe exercises
const config = require('config');
const footer = require('../pages/footer.page');
const landingPage = require('../pages/landing.page');

describe('homework class1', ()=> {
  it(`Exercise 1 - ${footer.retailerName}`, () => {
    // open bo page
    footer.openFooterPage();

    // switching to footer iframe
    footer.switchToFooterIframe();
    expect(footer.contactMeLnk.isDisplayed()).toBeTruthy();
    
    // check if link to sidebar test is displayed
    footer.switchFromFooterToMainPage();
    expect(footer.linkHeader.getText())
      .toBe('Links to sidebars for different stores');

    // click on Contact me option
    footer.switchToFooterIframe();
    footer.clickOnContactMeOpt();

    //new window
    expect(landingPage.contactNameFld).toBeDisplayed();
    expect(landingPage.contactNameFld.isDisplayed()).toBeTruthy();

    // adding name in contact page
    landingPage.contactNameFld.setValue('Salesfloor name');

    browser.pause(7000);
  });
});