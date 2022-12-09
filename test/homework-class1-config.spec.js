// homework exercise 1
const config = require('config');
const backoffice = require('../pages/backoffice.page');
// const retailer = process.env.NODE_ENV;
// const environment = process.env.NODE_APP_INSTANCE;

describe('homework class1', ()=> {
  it(`Exercise 1 - ${backoffice.retailerName}`, () => {
    // open bo page
    backoffice.openBoPage(backoffice.retailerName);

    // add credentials
    backoffice.addingLoginCredentialsConfig();
    // expect(backoffice.signInBtn).toBeEnabled();
    expect(backoffice.signInBtn.isEnabled()).toBeTruthy();
    // expect(backoffice.signInBtn).toBeEnabled();

    expect(backoffice.usernameFld).toHaveValue(backoffice.usernameCredential);
    expect(backoffice.passwordFld).toHaveValue(backoffice.passwordCredential);
    expect(backoffice.remermberTxt.isDisplayed()).toBeTruthy();
    expect(backoffice.remermberTxt).toBeDisplayed();
    browser.pause(10000);
  });
});