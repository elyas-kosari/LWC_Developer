import { LightningElement, wire } from 'lwc';
import getAccounts from "@salesforce/apex/AccountData.getAccounts";

export default class DisplayAccounts extends LightningElement {

  @wire(getAccounts)
  accountList;

  handleAccounts(event) {
    console.log(JSON.parse(JSON.stringify(this.accountList.data)));
  }
}