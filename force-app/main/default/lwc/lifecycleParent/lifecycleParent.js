import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {
  constructor() {
    super();
    console.log("The constructor of the parent runs");
  }

  connectedCallback() {
    console.log("The connectedCallback of the parent runs");
  }

  renderedCallback() {
    console.log("The renderedCallback of the parent runs");
  }
}