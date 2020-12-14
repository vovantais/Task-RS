export default class DetailCountryInfo {
  constructor(country, dataElements, root) {
    this.country = country;
    this.data = dataElements;
    this.root = root;
    this.conteiner = null;
    this.title = null;
    this.dataList = null;
    this.delete_button = null;
  }

  countryInfo() {
    this.createInfoConteiner();
    this.createTitle();
    this.createElementsDataList();
    this.createDeleteButton();
    this.outPutData();
  }

  createInfoConteiner() {
    const conteiner = document.createElement("div");
    this.conteiner = conteiner;
    conteiner.classList.add("country-info");
    this.root.append(conteiner);
  }

  createTitle() {
    const title = document.createElement("h3");
    title.classList.add("country-info__title");
    title.textContent = this.country;
    this.conteiner.append(title);
    this.title  = title;
  }

  createElementsDataList() {
    const dataList = document.createElement("div");
    dataList.classList.add("country-info__elements-list");
    this.title.after(dataList);
    this.dataList = dataList;
  }

  createElement(element, value) {
    const elementData = document.createElement("div");
    elementData.classList.add("elements-list__element");
    const elementName = document.createElement("p");
    elementName.classList.add("element", "element-name");
    elementName.textContent = element;
    const elementValue = document.createElement("p");
    elementValue.classList.add("element", "element-value");
    elementValue.textContent = value;
    elementData.append(elementName);
    elementData.append(elementValue);
    return elementData;
  }

  outPutData() {
    for (const key in this.data) {
      const element = this.createElement(key, this.data[key]);
      this.dataList.append(element);
    }
  }

  createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("country-info__del-button");
    this.conteiner.append(deleteButton);
    deleteButton.textContent = "close";
    this.delete_button = deleteButton;
    deleteButton.addEventListener("click", this.deleteInfoConteiner);
  }

  deleteInfoConteiner() {
    document.querySelector(".country-info").remove();
  }
//creategraph
}