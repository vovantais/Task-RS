import DetailCountryInfo from "./DetailCountryInfo";
import GetDataFromAPI from "./helpers/getDataFromAPI";
export default class Controller {
  constructor(root) {
    this.root = root;
    this.dataObj = null;
    this.targetCountry = null;
  }

  getTargetCountry() {
    const list = document.querySelector(".nav__country-list");
    list.addEventListener("click", (e) => {
      const targetCountry = e.target.textContent;
      this.targetCountry = targetCountry;
      this.addDataToInfoObject(targetCountry);
    });
  }

  //use it to create block with detail info with elements
  addDataToInfoObject(targetCountry) {
    const getData = new GetDataFromAPI();
    const commonData = getData.getCountryInfo(targetCountry);         
    commonData.then((data)=>{                   
      this.dataObj = this.createInfoObject(data.data);   
    }).then(() => this.outPutInfo());
  }

  createInfoObject(indexData) {
    const obj = {};
    obj.aqi = indexData.aqi === "-" ? 0 : indexData.aqi;
    const indexArray = ["co", "o3", "no2", "so2", "pm10", "pm25"];
    indexArray.forEach((element) => {
      for (const key in indexData.iaqi) {
        if (Object.hasOwnProperty.call(indexData.iaqi, element)) {
          obj[element] = indexData.iaqi[element].v;
        } else {
          obj[element] = 0;
        }
      }
    });
    return obj;
  }

  outPutInfo() {
    const countryDetailsInfo = new DetailCountryInfo(this.targetCountry, this.dataObj, this.root);
    if (document.querySelector(".country-info")) {
      countryDetailsInfo.deleteInfoConteiner();
    }
    countryDetailsInfo.outPutcountryInfo();
    countryDetailsInfo.createGraphConteiner();
  }

}
