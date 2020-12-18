// export default class Accordeon {
//   constructor(el) {
//     this.el = el;
//     this.buttons = this.el.querySelectorAll('.');
//     this.items = this.el.querySelectorAll('.');
//     this.std(this.buttons);
//   }

//   onlyToggle(item) {
//     item.forEach(elem => {
//       elem.addEventListener('click', event => {
//         event.target.closest('.').classList.toggle('active');
//       })
//     })
//   }

//   std(elems) {
//     elems.forEach(elem => {
//       elem.addEventListener('click', event => {
//         let thisAccordeonItemWrap = event.target.closest('.');
//         if (!thisAccordeonItemWrap.classList.contains('active')) {
//           this.removeAll();
//           thisAccordeonItemWrap.classList.add('active');
//         } else {
//           thisAccordeonItemWrap.classList.remove('active');
//         }
//       })
//     })
//   }

//   removeAll() {
//     this.items.forEach(item => {
//       item.classList.remove('active');
//     })
//   }
// }
