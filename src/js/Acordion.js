export default class Accordeon {
  constructor(el) {
    this.el = el;
    this.buttons = this.el.querySelectorAll('.js-accord-btn');
    this.items = this.el.querySelectorAll('.accordion__item');
    this.std(this.buttons);
  }

  onlyToggle(item) {
    item.forEach(elem => {
      elem.addEventListener('click', event => {
        event.target.closest('.accordion__item').classList.toggle('active');
      })
    })
  }

  std(elems) {
    elems.forEach(elem => {
      elem.addEventListener('click', event => {

        let thisAccordeonItemWrap = event.target.closest('.accordion__item');

        if (!thisAccordeonItemWrap.classList.contains('active')) {
          this.removeAll();
          thisAccordeonItemWrap.classList.add('active');
        } else {
          thisAccordeonItemWrap.classList.remove('active');
        }

      })
    })
  }

  removeAll() {
    this.items.forEach(item => {
      item.classList.remove('active');
    })
  }
}
