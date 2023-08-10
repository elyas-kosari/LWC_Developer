import { LightningElement, wire, api } from 'lwc';
import { getRecord } from "lightning/uiRecordApi";
import CONTACT_FIRSTNAME from "@salesforce/schema/Contact.FirstName";
import CONTACT_LASTNAME from "@salesforce/schema/Contact.LastName";
import CONTACT_PHONE from "@salesforce/schema/Contact.Phone";
import CONTACT_EMAIL from "@salesforce/schema/Contact.Email";

const fields = [CONTACT_FIRSTNAME, CONTACT_LASTNAME, CONTACT_PHONE, CONTACT_EMAIL];

export default class DisplayRelatedContacts extends LightningElement {

  contact;
  error;
  @api recordId = "0036s00000UmfhAAAR";

  @wire(getRecord, {recordId: "$recordId", fields}) // @wire(getRecord, {recordId: "$recordId", fields: fields})
  wired_Contact(result) {
    //console.log(JSON.parse(JSON.stringify(result)));
    if (result.data) {
      this.contact = result.data;
      console.log(this.contact);
    } else if (result.error) {
      this.error = result.error;
    }
  }

}