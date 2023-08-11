import { LightningElement } from 'lwc';
import CONTACT_FIRSTNAME from "@salesforce/schema/Contact.FirstName";
import CONTACT_LastName from "@salesforce/schema/Contact.LastName";
import CONTACT_Phone from "@salesforce/schema/Contact.Phone";
import CONTACT_Email from "@salesforce/schema/Contact.Email";
import CONTACT_Birthdate from "@salesforce/schema/Contact.Birthdate";

export default class DisplayContactForm extends LightningElement {

  fields = [CONTACT_FIRSTNAME, CONTACT_LastName, CONTACT_Phone, CONTACT_Email, CONTACT_Birthdate];
}