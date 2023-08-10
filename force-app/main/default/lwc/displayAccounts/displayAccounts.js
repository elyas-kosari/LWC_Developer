import { LightningElement, wire } from 'lwc';
import getAccounts from "@salesforce/apex/AccountData.getAccounts";

export default class DisplayAccounts extends LightningElement {

  disabled = false;

  @wire(getAccounts)
  accountList;

  handleAccounts() {
    this.disabled = !this.disabled;
  }
}