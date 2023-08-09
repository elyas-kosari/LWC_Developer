import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
  
  constructor() {
    super();
    console.log("The constructor of the child runs");
  }  

  connectedCallback() {
    console.log("The connectedCallback of the child runs");
  }

  renderedCallback() {
    console.log("The renderedCallback of the child runs");
  }
}