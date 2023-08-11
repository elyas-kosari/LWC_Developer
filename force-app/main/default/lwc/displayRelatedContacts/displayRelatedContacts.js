import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from "lightning/uiRecordApi";
import CONTACT_FIRSTNAME from "@salesforce/schema/Contact.FirstName";
import CONTACT_LASTNAME from "@salesforce/schema/Contact.LastName";
import CONTACT_PHONE from "@salesforce/schema/Contact.Phone";
import CONTACT_EMAIL from "@salesforce/schema/Contact.Email";
import CONTACT_BIRTHDATE from "@salesforce/schema/Contact.Birthdate";

const fields = [CONTACT_FIRSTNAME, CONTACT_LASTNAME, CONTACT_PHONE, CONTACT_EMAIL, CONTACT_BIRTHDATE];

export default class DisplayRelatedContacts extends LightningElement {

  contact = {};
  error;
  @api recordId;

  @wire(getRecord, {recordId: "$recordId", fields}) // @wire(getRecord, {recordId: "$recordId", fields: fields})
  wired_Contact(result) {
    console.log(JSON.parse(JSON.stringify(result)));
    this.contact = {};
    if (result.data) {
      this.contact = {
        firstName: getFieldValue(result.data, CONTACT_FIRSTNAME),
        lastName: getFieldValue(result.data, CONTACT_LASTNAME),
        phone: getFieldValue(result.data, CONTACT_PHONE),
        email: getFieldValue(result.data, CONTACT_EMAIL),
        birthdate: getFieldDisplayValue(result.data, CONTACT_BIRTHDATE)
      };
      console.log(JSON.parse(JSON.stringify(this.contact)));
    } else if (result.error) {
      this.error = result.error;
    }
  }

}