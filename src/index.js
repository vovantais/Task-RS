import "./js/menuBurger.js";
import "./assets/css/main.css";
import "./assets/scss/main.scss";
import CreateContentPage from "./js/CreateContentPage";
import TimeTillEnd from "./js/TimeTillEnd.js";
import DetailCountryInfo from "./js/DetailCountryInfo.js";
import Countries from './js/Countries';

const root = document.querySelector("#root");

const contentPage = new CreateContentPage(root);
contentPage.initCreateContentPage();

const timeTillEnd = new TimeTillEnd();
timeTillEnd.createTimeConteiner();

//! Do this class for render countries live search
const countries = new Countries();
countries.fetchCountriesAndFlag();
countries.searchCountry();

const sampleData = {
  "so": 150,
  "o": 25,
  "no": 100
};

const country = "France";

const countryDetailsInfo = new DetailCountryInfo(country, sampleData, root);
countryDetailsInfo.countryInfo();
