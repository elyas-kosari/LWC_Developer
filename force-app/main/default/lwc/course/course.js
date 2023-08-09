import { LightningElement, api } from 'lwc';

export default class Course extends LightningElement {
  @api courseName = "LWC";
  @api courseSize = 10;
  @api instructor = "Ratna";
  startDate = "8/7/2023";
}