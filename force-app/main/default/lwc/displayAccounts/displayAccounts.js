import { LightningElement, wire } from 'lwc';
import getAccounts from "@salesforce/apex/AccountData.getAccounts";

export default class DisplayAccounts extends LightningElement {

  disabled = false;
  annualRevenue = 30000000;

  @wire(getAccounts, {annualRevenue: "$annualRevenue"})
  accountList;

  handleAccounts() {
    this.disabled = !this.disabled;
  }
}