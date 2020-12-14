import "./js/menuBurger.js";
import "./assets/css/main.css";
import "./assets/scss/main.scss";
import CreateContentPage from "./js/CreateContentPage";
import TimeTillEnd from "./js/TimeTillEnd.js";
import DetailCountryInfo from "./js/DetailCountryInfo.js";

const root = document.querySelector("#root");

const contentPage = new CreateContentPage(root);
contentPage.initCreateContentPage();

const timeTillEnd = new TimeTillEnd();
timeTillEnd.createTimeConteiner();


const sampleData = {
  "so": 150,
  "o": 25,
  "no": 100
};

const country = "France";

const countryDetailsInfo = new DetailCountryInfo(country, sampleData, root);
countryDetailsInfo.countryInfo();
