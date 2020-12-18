export default class TopContriesPollution {
  constructor() {
    this._listContries = [];
    this.fetchAllAqiContries();
    this.createElements();
    this._topCleanContries = null;
    this._topDirtyContries = null;
  }
  async fetchAllAqiContries() {
    const req = await fetch("/countries.json");
    this._listContries = await req.json();
    this.fetchAllAqi();
  }
  fetchAllAqi() {
    Promise.all(this._listContries.map(item =>
      fetch(`https://api.waqi.info/feed/${item.name}/?token=703e3e7f4f8ffef686979528a294718f8e40c91f`)
        .then(res => res.json())
        .then(res => ({ aqi: res.data.aqi, name: item.name, flag: item.flag }))
        .catch(err => console.log("Error " + err))
    ))
      .then(data => {
        let res = data.filter(item => typeof item.aqi === "number")
          .sort((a, b) => a.aqi - b.aqi);
        this._topCleanContries = res.splice(0, 10);
        this._topDirtyContries = res.splice(-10, res.length);
        this.render(this._topCleanContries, this._topDirtyContries);
      })
  }
  createElements() {
    const mainContent = document.querySelector(".main-content"); 

    const topContriesForPollutionClean = document.createElement("div");
    const topContriesForPollutionBodyClean = document.createElement("div");
    const topContriesForPollutionListClean = document.createElement("ul");

    const topContriesForPollutionDirty = document.createElement("div");
    const topContriesForPollutionBodyDirty = document.createElement("div");
    const topContriesForPollutionListDirty = document.createElement("ul");

    topContriesForPollutionClean.classList.add("main__top-pollutionClean");
    topContriesForPollutionBodyClean.classList.add("main__body-pollutionClean");
    topContriesForPollutionListClean.classList.add("main__list-pollutionClean");

    topContriesForPollutionDirty.classList.add("main__top-pollutionDirty");
    topContriesForPollutionBodyDirty.classList.add("main__body-pollutionDirty");
    topContriesForPollutionListDirty.classList.add("main__list-pollutionDirty");

    mainContent.append(topContriesForPollutionClean);
    topContriesForPollutionClean.append(topContriesForPollutionBodyClean);
    topContriesForPollutionBodyClean.append(topContriesForPollutionListClean);

    mainContent.append(topContriesForPollutionDirty);
    topContriesForPollutionDirty.append(topContriesForPollutionBodyDirty);
    topContriesForPollutionBodyDirty.append(topContriesForPollutionListDirty);
  }

  render(topClean, topDirty) {
    const topContriesForPollutionListClean = document.querySelector(".main__list-pollutionClean");
    const topContriesForPollutionListDirty = document.querySelector(".main__list-pollutionDirty");
    topClean.forEach(item => {
      const topContriesForPollutionListItemClean = document.createElement("li");
      const imgFlag = document.createElement("img");
      topContriesForPollutionListItemClean.textContent = item.name + " " + item.aqi + " AQI";
      imgFlag.src = item.flag;
      topContriesForPollutionListClean.append(topContriesForPollutionListItemClean);
      topContriesForPollutionListItemClean.prepend(imgFlag);
    })
    topDirty.forEach(item => {
      const topContriesForPollutionListItemDirty = document.createElement("li");
      const imgFlag = document.createElement("img");
      imgFlag.src = item.flag;
      topContriesForPollutionListItemDirty.textContent = item.name + " " + item.aqi + " AQI";
      topContriesForPollutionListDirty.append(topContriesForPollutionListItemDirty);
      topContriesForPollutionListItemDirty.prepend(imgFlag);
    })
  }
}
