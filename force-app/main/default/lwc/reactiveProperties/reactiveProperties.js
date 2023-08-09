import { LightningElement, track } from 'lwc';

export default class ReactiveProperties extends LightningElement {
  courseName = "Lightning Web Components"

  names = [];

  handleChange(event) {
    debugger;
    // let value = document.querySelector("lightning-input").value;
    let value = this.template.querySelector("lightning-input").value;
    this.courseName = value;
    this.names.push(value);
    console.log(JSON.parse(JSON.stringify(this.names)));
  }
}