export default class TopContriesPollution {
  constructor() {
    this._listContries = [];
    this.fetchAllAqiContries();
    this.createElements();
    this._topCleanContries = null;
    this._topDirtyContries = null;
  }
  async fetchAllAqiContries() {
    const req = await fetch("./countries.json");
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
    const mainContent = document.querySelector(".main__outPut-conteiner");
    const topContriesForPollutionClean = document.createElement("div");
    const topContriesForPollutionBodyClean = document.createElement("div");
    const topContriesForPollutionListClean = document.createElement("ul");
    const topContriesForPollutionListItemClean = document.createElement("li");
    const btnContriesForPollution = document.createElement("button");
    const topContriesForPollutionListItemCleanDirty = document.createElement("li");
    const btnContriesForPollutionDirty = document.createElement("button");

    topContriesForPollutionClean.classList.add("main__top-pollutionClean");
    topContriesForPollutionBodyClean.classList.add("main__body-pollutionClean");
    topContriesForPollutionListClean.classList.add("main__list-pollutionClean", "js-accord", "accordion");
    topContriesForPollutionListItemClean.classList.add("accordion__item", "clean");
    btnContriesForPollution.classList.add("accordion__header", "js-accord-btn");
    topContriesForPollutionListItemCleanDirty.classList.add("accordion__item", "dirty");
    btnContriesForPollutionDirty.classList.add("accordion__header", "js-accord-btn");

    btnContriesForPollution.textContent = "top 10 clean countries";
    btnContriesForPollutionDirty.textContent = "top 10 dirty countries";

    mainContent.append(topContriesForPollutionClean);
    topContriesForPollutionClean.append(topContriesForPollutionBodyClean);
    topContriesForPollutionBodyClean.append(topContriesForPollutionListClean);
    topContriesForPollutionListClean.append(topContriesForPollutionListItemClean, topContriesForPollutionListItemCleanDirty);
    topContriesForPollutionListItemClean.append(btnContriesForPollution);
    topContriesForPollutionListItemCleanDirty.append(btnContriesForPollutionDirty);
  }

  render(topClean, topDirty) {
    const topContriesForPollutionListClean = document.querySelector(".clean");
    const topContriesForPollutionListDirty = document.querySelector(".dirty");
    topClean.forEach(item => {
      const topContriesForPollutionItemClean = document.createElement("p");
      const imgFlag = document.createElement("img");
      topContriesForPollutionItemClean.classList.add("accordion__content","clean");
      topContriesForPollutionItemClean.textContent = item.name + " " + item.aqi + " AQI";
      imgFlag.src = item.flag;
      topContriesForPollutionListClean.append(topContriesForPollutionItemClean);
      topContriesForPollutionItemClean.prepend(imgFlag);
    })
    topDirty.forEach(item => {
      const topContriesForPollutionListItemDirty = document.createElement("p");
      const imgFlag = document.createElement("img");
      imgFlag.src = item.flag;
      topContriesForPollutionListItemDirty.classList.add("accordion__content","dirty");
      topContriesForPollutionListItemDirty.textContent = item.name + " " + item.aqi + " AQI";
      topContriesForPollutionListDirty.append(topContriesForPollutionListItemDirty);
      topContriesForPollutionListItemDirty.prepend(imgFlag);
    })
  }
}
