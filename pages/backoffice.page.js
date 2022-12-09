// class backoffice
const config = require('config');
const PageLib = require('./pagelib');
class Backoffice extends PageLib {

  constructor() {
    super();
    this.retailer = ''; 
  }
  // login field  
  get usernameFld() {
    return $('#sf-user-login');
  }

  // password field
  get passwordFld() {
    return $('#sf-user-pass');
  }

  // Sign in button
  get signInBtn() {
    return $('#wp-submit');
  }

  // remember username text
  get remermberTxt() {
    return $('.rememberme');
  }

  get boUrl() {
    return config.get('backofficeUrl');
  }

  get retailerName() {
    return config.get('retailerName');
  }

  get usernameCredential() {
    return config.get('rep1.username');
  }

  get passwordCredential() {
    return config.get('rep1.password');
  }
  
  // open backoffice login page
  openBackofficePage(retailer) {
    this.openUrl(`https://${retailer}-qa05.salesfloor.net/login`);
    browser.waitUntil(() => this.usernameFld.isDisplayed(),
      { 
        timeout : 3000, 
        timeoutMsg : 'Login page is taking more than 3s to load'
      }
    );
  }

  // open backoffice login page
  openBoPage(retailer) {
    // this.openUrl(`https://${retailer}-${process.env.NODE_APP_INSTANCE}.salesfloor.net/login`);
    this.openUrl(this.boUrl);
    browser.waitUntil(() => this.usernameFld.isDisplayed(),
      { 
        timeout : 3000, 
        timeoutMsg : 'Login page is taking more than 3s to load'
      }
    );
  }

  // adding credentials in login page
  addingLoginCredentials(username, password) {
    this.usernameFld.setValue(username);
    this.passwordFld.setValue(password);
  }
  
  // adding credentials in login page
  addingLoginCredentialsConfig(
    username=this.usernameCredential,
    password=this.passwordCredential
    ) {
    this.usernameFld.setValue(username);
    this.passwordFld.setValue(password);
  }

  signInBtnEnable() {
    this.signInBtn.isEnabled();
  }

}
module.exports = new Backoffice();