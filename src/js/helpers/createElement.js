/* eslint-disable linebreak-style */
export default class CreateElement {
  constructor(tag) { 
    this.tag = tag;
  }

  createTemplate() {
    const element = document.createElement(this.tag);
    return element;
  }

  addClass(element, addedClass) {
    element.classList.add(addedClass);
  }

  addAttribute(element, attr, value) {
    element.addAttribute(attr, value);
  }
}

