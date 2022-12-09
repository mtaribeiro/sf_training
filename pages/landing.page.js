const PageLib = require('./pagelib');

/**
 * LandingPage page Class
 *
 * @class
 * @classdesc main class for landing page
 * @extends PageLib
 */
class LandingPage extends PageLib {
  
  /** Create a landingPage instance 
   * @constructor LandingPage
   */
  constructor(){
    super();
  }
  /** Return element of contact name field
   * @return {cssSelectorObj}
  */
  get contactNameFld() {
     return $('#name');
  }

  /** Type contact name
   * @param {string} name - name of contact
  */
  typeContactName(name) {
    this.contactNameFld.setValue(name)
  }
}
module.exports = new LandingPage();
