import { LightningElement } from 'lwc';

export default class ButtonDispatcher extends LightningElement {

  studentName = "Mercedes";

  fireEvent() {
    const evt = new CustomEvent("selectedstudent", {
      detail: {
        student: this.studentName
      },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(evt);
  }

}