import { LightningElement } from 'lwc';

export default class ButtonHandler extends LightningElement {

  student;

  handleSelectedStudent(event) {
    this.student = event.detail.student;
  }
}