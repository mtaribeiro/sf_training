const config = require('config');
const PageLib = require('./pagelib');

/**
 * Footer page Class
 *
 * @class
 * @classdesc Footer class
 * @extends PageLib
 */
class Footer extends PageLib {
  /** Create a landingPage instance 
   * @constructor Footer page
   */
  constructor(){
    super();
    this.class = 'footer';
    this.mainPageHandle = '';
    this.landingPageHandle = '';
  }
  /** IframeId for footer Iframe
   * @return {cssSelectorObj}
   */
  get footerIframeId() {
     return $('iframe[id="sf-footer-companion"]');
  }

  /** Url for footer page
   * @return {string}
   * @example https://chicos-widgets-qa05.salesfloor.net/tests/desktop?lang=en&sf_rep=test_rep1',
   */
  get footerUrl() {
    return config.get('footerUrl');
  }

  /** retailer name
   * @return {string}
   */
   get retailerName() {
    return config.get('retailerName');
  }

  /** contact me link on footer
   * @return {cssSelectorObj}
   */
  get contactMeLnk() {
    return $('a[title="Contact Me"] span[class="footer__action__text"]');
  }

  // header title
  get linkHeader() {
    return $('body > h2');
  }

  /** open footer page Url and save the window handle for mainpage
   */
  openFooterPage() {
    this.openUrl(this.footerUrl);
    browser.waitUntil(() => this.linkHeader.isExisting(),
      { 
        timeout : 3000, 
        timeoutMsg : 'Login page is taking more than 3s to load'
      }
    );
    browser.pause(1000);
    this.mainPageHandle = browser.getWindowHandle();
  }

  // change the foucs to footer iframe
  switchToFooterIframe() {
    browser.switchToFrame(this.footerIframeId);
  }

  // return to focus to main page (no iframe)
  switchFromFooterToMainPage() {
    browser.switchToParentFrame();
  }

  /** Get the last window handle
   * @return {string}
   */
    getLastOpenWindowHandle() {
    const newWindowsList = browser.getWindowHandles();
    // to show the Id for each window
    console.log(newWindowsList);
    return newWindowsList[newWindowsList.length - 1];
  }

  // click on contact me option on footer
  clickOnContactMeOpt() {
    this.contactMeLnk.click();
    // update landingpage handle
    if (this.landingPageHandle === '') {
      this.landingPageHandle = this.getLastOpenWindowHandle();
    }
    browser.switchToWindow(this.landingPageHandle);
  }
}
module.exports = new Footer();
