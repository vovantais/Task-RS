export default class TimeTillEnd {
  constructor() {
    this.timeConteiner = null;
    this._endDate = new Date("December 31, 2050 23:59:59").getTime();
    new Date().getTime();
  }

  createTimeConteiner() {
    let listLabels = ["year", "month", "hour", "min", "sec"];
    const root = document.querySelector(".main__outPut-conteiner");
    const timeConteiner = document.createElement("div");
    const timeLabel = document.createElement("p");
    timeLabel.classList.add("time__label");
    timeLabel.textContent = "time till end";
    timeConteiner.classList.add("header__time-conteiner");
    timeConteiner.id = "countdown";

    const tiles = document.createElement("div");
    tiles.id = "tiles";

    const labels = document.createElement("ul");
    labels.classList.add("labels");

    root.append(timeConteiner);
    timeConteiner.append(tiles);
    timeConteiner.append(labels);
    timeConteiner.append(timeLabel);

    listLabels.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      labels.append(li);
      const span = document.createElement("span");
      tiles.append(span);
    })
  }
  countTime() {
    const timer = setInterval(() => {
      let timeNow = new Date().getTime();
      let diff = this._endDate - timeNow;
      let year = Math.floor(diff / 31104000000);
      let month = Math.floor((diff / 2592000000) % 12);
      let hour = Math.floor((diff / 3600000) % 24);
      let min = Math.floor((diff / 60000) % 60);
      let sec = Math.floor((diff / 1000) % 60);
      this.render({ year, month, hour, min, sec });
      if (diff < 0) {
        clearInterval(timer);
        this.timeConteiner.textContent = "Time is over";
      }
    }, 1000);
  }
  render(data) {
    const labelsList = document.querySelector("#tiles").children;
    Array.from(labelsList).forEach((item, index) => {
      const val = Object.values(data);
      item.innerHTML = val[index];
    });
  }
}
