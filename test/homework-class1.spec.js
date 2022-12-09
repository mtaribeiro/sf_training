// homework exercise 1
const backoffice = require('../pages/backoffice.page');

describe('homework class1', ()=> {
  it('Exercise 1 - Elguntors', () => {
    // open bo page
    backoffice.openBackofficePage('elguntors');

    // add credentials
    backoffice.addingLoginCredentials('test_rep1', '650NotreDameOuest');
    // expect(backoffice.signInBtn).toBeEnabled();
    expect(backoffice.signInBtn.isEnabled()).toBeTruthy();
    // expect(backoffice.signInBtn).toBeEnabled();

    expect(backoffice.usernameFld).toHaveValue('test_rep1');
    expect(backoffice.passwordFld).toHaveValue('650NotreDameOuest');
    expect(backoffice.remermberTxt.isDisplayed()).toBeTruthy();
    expect(backoffice.remermberTxt).toBeDisplayed();
  });
  it('Exercise 2 - Chicos', () => {
    // open bo page
    backoffice.openBackofficePage('chicos');

    // add credentials
    backoffice.addingLoginCredentials('test_rep1', '650NotreDameOuest');
    // expect(backoffice.signInBtn).toBeEnabled();
    expect(backoffice.signInBtn.isEnabled()).toBeTruthy();
    // expect(backoffice.signInBtn).toBeEnabled();

    expect(backoffice.usernameFld).toHaveValue('test_rep1');
    expect(backoffice.passwordFld).toHaveValue('650NotreDameOuest');
    expect(backoffice.remermberTxt.isDisplayed()).toBeTruthy();
    expect(backoffice.remermberTxt).toBeDisplayed();
  });
  it('Exercise 2 - Cosbar', () => {
    // open bo page
    backoffice.openBackofficePage('cosbar');

    // add credentials
    backoffice.addingLoginCredentials('test_rep1', '650NotreDameOuest');
    // expect(backoffice.signInBtn).toBeEnabled();
    expect(backoffice.signInBtn.isEnabled()).toBeTruthy();
    // expect(backoffice.signInBtn).toBeEnabled();

    expect(backoffice.usernameFld).toHaveValue('test_rep1');
    expect(backoffice.passwordFld).toHaveValue('650NotreDameOuest');
    expect(backoffice.remermberTxt.isDisplayed()).toBeTruthy();
    expect(backoffice.remermberTxt).toBeDisplayed();
  });
});