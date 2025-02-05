import "./js/MenuBurger.js";
import "./assets/css/main.css";
import "./assets/scss/main.scss";
import CreateContentPage from "./js/CreateContentPage";
import TimeTillEnd from "./js/TimeTillEnd.js";
import Countries from "./js/Countries";
import Controller from "./js/Controller.js";
import CreateMap from "./js/map.js";
import ElementDescription from "./js/ElementDescription.js";
import ColorValueDescription from "./js/ColorValueDescription.js";
import TopContriesPollution from "./js/TopContriesPollution";
import Accordeon from "./js/Acordion";

const root = document.querySelector("#root");

const contentPage = new CreateContentPage(root);
contentPage.initCreateContentPage();

const timeTillEnd = new TimeTillEnd();
timeTillEnd.createTimeConteiner();
timeTillEnd.countTime();

const countries = new Countries();
countries.fetchCountriesAndFlag();
countries.searchCountry();

const topContriesPollution = new TopContriesPollution();

const controller = new Controller(root);
controller.loadDefaultCountryInfo();
controller.getTargetCountry();


const newMap = new CreateMap(53.9000000, 27.5666700);
newMap.LoadMap();

const elementDescription = new ElementDescription(root);
elementDescription.createDescriptionConteiner();
elementDescription.createElement();

const elem = document.querySelector(".accordion");
const accordeon = new Accordeon(elem);

const colorValueDescription = new ColorValueDescription(root);
colorValueDescription.createButtonConteiner();
colorValueDescription.getValueInfo();
