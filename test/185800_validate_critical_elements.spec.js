const storefront = require('../pages/storefront.page');

describe('storefront validation', () => {
  it('185800 validate critical ements on Storefront page', () => {
    // allure command

    // open the storefront page
    storefront.openStorefrontPage('chicos');
    expect(browser).toHaveUrlContaining(`https://${storefront.retailer}-qa05.salesfloor.net`)
    expect(storefront.retailerTitle).toBePresent()

    // checking new arrive section displayed

    // check if Top Pick products section is displayed

    // Search for jeans
  })
})