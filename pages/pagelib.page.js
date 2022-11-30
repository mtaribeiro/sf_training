module.exports = class PageLib {
  // open page with parameter
  constructor() {
    this.retailer = '';
  }
  open (path) {
    return browser.url(path);
  }
}