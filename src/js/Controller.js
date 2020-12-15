import DetailCountryInfo from "./DetailCountryInfo";
export default class Controller {
  constructor (root) {
    this.root = root;
    this.dataObj = null;
    this.targetCountry = null;
  }

  getTargetCountry() {
    const list = document.querySelector(".nav__country-list");
    list.addEventListener("click", (e)=>{
      const targetCountry = e.target.textContent;
      this.targetCountry = targetCountry;
      console.log(targetCountry)
      this.getCountryInfo(targetCountry);
    });
  }

  getCountryInfo(country) {
    if(country === "Russian Federation (Moscow)") country = "moscow";
    if(country === "belarus") country = "lithuania";
    return new Promise((resolve, reject)=>{
      let request = new XMLHttpRequest();
      request.open("GET",`https://api.waqi.info/feed/${country}/?token=703e3e7f4f8ffef686979528a294718f8e40c91f`);
      request.onload = function(){
        if(request.status === 200){
          resolve(request.response);
        }else{
          reject("file nor found");
        }
      };
      request.send();
    }).then((data)=> {
      const indexData = JSON.parse(data);
      this.dataObj =  this.createInfoObject(indexData.data);
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
        }else{
          obj[element] = 0; 
        }
      }
    });
    return obj;
  }

  outPutInfo() {
    const countryDetailsInfo = new DetailCountryInfo(this.targetCountry, this.dataObj, this.root);
    if(document.querySelector(".country-info")){
      countryDetailsInfo.deleteInfoConteiner();
    }
    countryDetailsInfo.outPutcountryInfo();
    countryDetailsInfo.createGraphConteiner();
  }
  
}