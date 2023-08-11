import { LightningElement, wire } from 'lwc';
import getAccounts from "@salesforce/apex/AccountData.getAccounts";

export default class DisplayAccounts extends LightningElement {

  colConfigs = [
    {label: "Account Name", fieldName: "name", type: "text"},
    {label: "Annual Revenue (USD)", fieldName: "aRevenue", type: "currency"},
    {label: "Website", fieldName: "website", type: "url"},
  ];

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
        name: element.Name,
        website: element.Website,
        aRevenue: element.AnnualRevenue,
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