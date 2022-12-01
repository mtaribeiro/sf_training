// pagelib class

module.exports= class PageLib {

  // open a page
  open (path) {
    return browser.url(path)
  }
}