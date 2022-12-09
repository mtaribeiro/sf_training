const PageLib = require('./pagelib');

/**
 * Storefront page objects
 */
class Storefront extends PageLib {
  constructor(){
    super();
    this.retailerName = '';
  }

  // return the title image of retailer
  get retailerHeadLogo() { return $('div.storefront-header__logo a'); }

  // new arrive section
  get newArriveSection() { 
    return $('h1#storefront-section-productgrid-new-arrivals-title');
  }

  // Search text link 
  get searchLnk() { 
    return $('a.storefront-header__link.storefront-header__link--is-search.storefront-header__search-trigger.js-storefront-search-btn');
  }

  get topPicksProducts() {return $$('#AtTopPicks a.product__link');}

  get searchImputFld() { return $('input#searchInput');}

  get goSearchBtn() {
    return $('.storefront-header__search__button.js-storefront-search-btn');
  }

  openStorefrontPage(retailer) {
    this.retailerName = retailer;
    this.openUrl(`https://${retailer}-qa05.salesfloor.net/test_rep1`);
  }

  // click on search button
  clickOnSearchBtn() {
    this.searchLnk.click()
  }

  // type and click on Go search
  typeAndSearchBy(searchTxt) {
    this.searchImputFld.setValue(searchTxt);
    browser.pause(5000);
    this.goSearchBtn.click();
    browser.pause(5000);
  }

  // do a search
  clickAndSearchBy(searchTxt) {
    this.clickOnSearchBtn();
    this.typeAndSearchBy(searchTxt);
  }
}

module.exports = new Storefront();
