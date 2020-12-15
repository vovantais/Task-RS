export default class TimeTillEnd {
  constructor() {
    this.timeConteiner = null;
  }

  createTimeConteiner() {
    const timeConteiner = document.createElement("div");
    timeConteiner.classList.add("header__time-conteiner");
    this.timeConteiner = timeConteiner;
    const header = document.querySelector(".main__header");
    header.append(timeConteiner);
    const time = this.timeTillEnd();
    timeConteiner.textContent = time;
  }

  timeTillEnd() {
    //текущая дата
    //дата конца
    //получить разницу
    //перевести в минуты и часы
    //вывести в контейнер
    return ("10:10:10");
  }
}


