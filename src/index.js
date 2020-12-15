import "./js/menuBurger.js";
import "./assets/css/main.css";
import "./assets/scss/main.scss";
import CreateContentPage from "./js/CreateContentPage";
import TimeTillEnd from "./js/TimeTillEnd.js";
import Countries from "./js/Countries";
import Controller from "./js/Controller.js";

const root = document.querySelector("#root");

const contentPage = new CreateContentPage(root);
contentPage.initCreateContentPage();

const timeTillEnd = new TimeTillEnd();
timeTillEnd.createTimeConteiner();

//! Do this class for render countries live search
const countries = new Countries();
countries.fetchCountriesAndFlag();
countries.searchCountry();

const controller = new Controller(root);
controller.getTargetCountry();
