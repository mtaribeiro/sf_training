const storefront = require('../pages/storefront.page');

describe('storefront suite', () => {
  it('C185800 validate critical elements on Storefront page', () => {
    // allure commands

    // open storefront page
    storefront.openStorefrontPage('chicos');
    expect(browser).toHaveUrlContaining(`https://${storefront.retailerName}-qa05.salesfloor.net`);
    expect(storefront.retailerHeadLogo.isDisplayed()).toBeTruthy();

    // check if new arrivals section is displayed
    expect(storefront.newArriveSection.isDisplayed()).toBeTruthy();

    // check the title of new arrivals 
    expect(storefront.newArriveSection.getText()).toEqual('NEW ARRIVALS111');
    
    // count top picks products displayed
    expect(storefront.topPicksProducts.length).toEqual(8) ;
    
    // click on search button (A)
    storefront.clickOnSearchBtn();

    // search by Jeans (B)
    storefront.typeAndSearchBy('jeans');

    // we can replace the 2 previous intearation (A+B) by 
    // storefront.clickAndSearchBy('jeans');

    // check if the result page shows the salesfloor paramenter on the url
    expect(browser).toHaveUrlContaining('&sf_rep=test_rep1&sf_source_origin=storefront');
  });
});