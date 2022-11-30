const { default: $ } = require('webdriverio/build/commands/browser/$');
const PageLib = require('./pagelib.page');

class Storefront extends PageLib {
  constructor() {
    super();
  }

  get retailerTitle() { return $('img[alt=\"Chico\'s\"]'); }
  
  // open storefront page
  openStorefrontPage(retailer) {
    this.retailer = retailer;
    this.open(`https://${retailer}-qa05.salesfloor.net/test_rep1`)
  }
}

module.exports = new Storefront();