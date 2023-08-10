import { LightningElement, wire } from 'lwc';
import getAccounts from "@salesforce/apex/AccountData.getAccounts";

export default class DisplayAccounts extends LightningElement {

  disabled = false;
  annualRevenue = 30000000;
  accountList = [];
  error;

  // @wire(getAccounts, {annualRevenue: "$annualRevenue"})
  // accountList; // accountList.data, accountList.error

  @wire(getAccounts, {annualRevenue: "$annualRevenue"})
  wired_accountList({data, error}) { // wired_accountList(result) --> result.data, result.error
    console.log(data);
    this.accountList = [];
    if (data) { // if (result.data)
      this.accountList = data.map(element => ({
        accountId: element.Id,
        label: element.Name,
        value: element.AnnualRevenue
    })); // this.accountList = result.data;
      this.error = undefined;
    } else if (error) { // else if (result.error)
      this.accountList = undefined;
      this.error = error;  // this.error = result.error
    }
  }

  handleAccounts() {
    this.disabled = !this.disabled;
  }
}