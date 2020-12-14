export default class CreateContentPage {
  constructor(root) {
    this.root = root;
    this.header = null;
    this.nav = null;
    this.map = null;
  }
  createHeader() {
    const mainHeader = document.createElement("header");
    mainHeader.classList.add("main__header");
    this.header = mainHeader;
    this.root.append(mainHeader);
  }

  createNavigation() {
    const mainNav = document.createElement("nav");
    mainNav.classList.add("main__navigation");
    this.nav = mainNav;
    this.header.after(mainNav);
  }

  createMap() {
    const map = document.createElement("article");
    map.classList.add("main___map");
    this.map = map;
    this.nav.after(map);
  }

  initCreateContentPage() {
    this.createHeader();
    this.createNavigation();
    this.createMap();
  }
}