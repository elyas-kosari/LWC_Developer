import { LightningElement, api } from 'lwc';
import CONTACT_FIRSTNAME from "@salesforce/schema/Contact.FirstName";
import CONTACT_LASTNAME from "@salesforce/schema/Contact.LastName";
import CONTACT_PHONE from "@salesforce/schema/Contact.Phone";
import CONTACT_EMAIL from "@salesforce/schema/Contact.Email";

const fields = [CONTACT_FIRSTNAME, CONTACT_LASTNAME, CONTACT_PHONE, CONTACT_EMAIL];

export default class LightningForms extends LightningElement {
  @api recordId = "0036s00000UmfhAAAR";
  fields = fields;
}