import countries from "../../static/countries.json";
export default class GetDataFromAPI {

  //use it to get data object by coordinates
  getDataByCoordinates(lat, lng) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open("GET", `https://api.waqi.info/feed/geo::${lat}:${lng}/?token=703e3e7f4f8ffef686979528a294718f8e40c91f`);
      request.onload = function () {
        if (request.status === 200) {
          resolve(JSON.parse(request.response));
        } else {
          reject("file nor found");
        }
      };
      request.send();
    });
  }
   
  //use it to get data object for target country name
  getCountryInfo(country) {
    if (country === "Russian Federation (Moscow)") country = "moscow";
    if (country=== "belarus") country= "lithuania";
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open("GET", `https://api.waqi.info/feed/${country}/?token=703e3e7f4f8ffef686979528a294718f8e40c91f`);
      request.onload = function () {
        if (request.status === 200) {
          resolve(JSON.parse(request.response));
        } else {
          reject("file nor found");
        }
      };
      request.send();
    });
  }
 
  //use it to get AQI data for target country
  getAQIdataForCountry(targetCountry) {
    const commonData = this.getCountryInfo(targetCountry); 
    commonData.then((data) => {
      return data.data.aqi;
    });
  }

  //use it to get element data for target country
  getElementDataForCountry(targetCountry, targetElement) {
    const commonData = this.getCountryInfo(targetCountry);
    let values = {}; 
    commonData.then((data) => {
      const elementsData = data.data.iaqi;
      for (const key in elementsData) {
        if(key === targetElement) {
            console.log(key);
          values.value = elementsData[key].v;
          values.country = targetCountry;
        }
      }
    });
    return values;
  }

  //use it to get element value
  getElementValue(targetElement) {
    const countriesData = countries;
    for (const key in countriesData) {
      const keyData = this.getElementDataForCountry(countriesData[key].name, targetElement.toLowerCase());
      console.log(keyData)
    }
    //для каждой страны получить дату
    //из кадой даты вытащить показатель елемента если он есть
    //отразить это на карте
    //отразить это в списке
  }
}