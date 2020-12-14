/* eslint-disable linebreak-style */
export default class CreateElement {
  constructor(tag) { 
    this.tag = tag;
    this.element = null;
  }

  createTemplate() {
    const element = document.createElement(this.tag);
    this.element = element;
    return element;
  }
  
  appendElement(root){
    root.append(this.element);
  }

  addAfterElement(root){
    root.after(this.element);
  }

  addBeforeElement(root){
    root.before(this.element);
  }

  addElementToDOM(root){
    root.append(this.element);
  }
  addClass(addedClass) {
    this.element.classList.add(addedClass);
  }

  addAttribute(attr, value) {
    this.element.addAttribute(attr, value);
  }

  addTextContent(string){
    this.element.textContent = string;
  }
}

