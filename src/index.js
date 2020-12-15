import "./js/menuBurger.js";
import "./assets/css/main.css";
import "./assets/scss/main.scss";
import CreateContentPage from "./js/CreateContentPage";
import TimeTillEnd from "./js/TimeTillEnd.js";
import DetailCountryInfo from "./js/DetailCountryInfo.js";
import Countries from "./js/Countries";

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
  "CO" : "220",
  "O3" : "10",
  "NO2" : "40",
  "SO2" : "80",
  "PM10" : "300",
  "PM2.5" : "120",
};

const country = "France";

const countryDetailsInfo = new DetailCountryInfo(country, sampleData, root);
countryDetailsInfo.countryInfo();
countryDetailsInfo.createGraphConteiner();
