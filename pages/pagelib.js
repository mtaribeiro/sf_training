// pagelib class

module.exports= class PageLib {

  // open a page
  openUrl (path) {
    return browser.url(path)
  }
}