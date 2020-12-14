import "./js/menuBurger.js";
import "./js/controller";
import "./assets/css/main.css";
import "./assets/scss/main.scss";
import CreateElement from "./js/helpers/CreateElement";

const root = document.querySelector("#root");

//main__header
const createHeader = new CreateElement("header");
const header = createHeader.createTemplate();
createHeader.appendElement(root);
createHeader.addClass("main__header");

//main header content
const createtimeTillEnd = new CreateElement("div");
const timeConteiner = createtimeTillEnd.createTemplate(header, "append");
createtimeTillEnd.appendElement(header);
createtimeTillEnd.addClass("header__time-conteiner");
createtimeTillEnd.addTextContent("10:10:10");      

const createNav = new CreateElement("nav");
const nav = createNav.createTemplate(header, "after");
createNav.addAfterElement(header);
createNav.addClass("main__navigation");

const createMap = new CreateElement("article");
const map = createMap.createTemplate(nav, "after");
createMap.addAfterElement(nav);
createMap.addClass("main___map");


//navigation list with search input
const createSearchInput = new CreateElement("input");
const searchInput = createSearchInput.createTemplate();
createSearchInput.appendElement(nav);
createSearchInput.addClass("nav__search-input");

const createList = new CreateElement("ul");
const navList = createList.createTemplate();
createList.addAfterElement(searchInput);
createList.addClass("nav__country-list");
