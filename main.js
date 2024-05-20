/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popver.js
class Popover {
  constructor(element) {
    this.element = element;
  }
  static get markup() {
    return `
            <div class="popover-header"></div>
            <div class="popover-body"></div>
            <div class="arrow"></div>
        `;
  }
  createPopover() {
    this.popover = document.createElement("div");
    this.popover.classList.add("popover");
    this.popover.innerHTML = Popover.markup;
    this.element.insertAdjacentElement("afterend", this.popover);
    return this.popover;
  }
  show(message, title) {
    if (!this.popover) {
      this.createPopover();
      const popoverTitle = this.popover.querySelector(".popover-header");
      const popoverContent = this.popover.querySelector(".popover-body");
      popoverContent.textContent = message;
      popoverTitle.textContent = title;
      const {
        left,
        top,
        width
      } = this.element.getBoundingClientRect();
      const popoverWidth = this.popover.offsetWidth;
      const popoverHeight = this.popover.offsetHeight;
      this.popover.style.left = `${left + width / 2 - popoverWidth / 2}px`;
      this.popover.style.top = `${top - popoverHeight - 10}px`;
    }
  }
}
;// CONCATENATED MODULE: ./src/js/widget.js

class FormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.bindToDOM();
  }
  static get markup() {
    return `
        <form class="form-widget">
            <button class="btn-popover">Click to toggle popover</button>
        </form>
        `;
  }
  static get btnSelector() {
    return ".btn-popover";
  }
  static get formSelector() {
    return ".form-widget";
  }
  bindToDOM() {
    this.parentEl.innerHTML = FormWidget.markup;
    this.element = this.parentEl.querySelector(FormWidget.formSelector);
    this.btn = this.element.querySelector(FormWidget.btnSelector);
    this.onClick();
  }
  onClick() {
    this.btn.addEventListener("click", e => {
      e.preventDefault();
      const popover = new Popover(this.btn);
      let popoverEl = document.querySelector(".popover");
      if (!popoverEl) {
        popover.show("Contnent", "Title");
      } else {
        popoverEl.remove();
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector(".container");
const app_form = new FormWidget(container);
app_form.bindToDOM();
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;