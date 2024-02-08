import { Email } from './Email';
import { Phone } from './Phone';
import { Address } from './Address';

export interface UnifiedContactInput {
  /**
   * The first name of the contact
   */
  first_name: string;
  /**
   * The last name of the contact
   */
  last_name: string;
  /**
   * The email addresses of the contact
   */
  email_addresses: Email[];
  /**
   * The phone numbers of the contact
   */
  phone_numbers: Phone[];
  /**
   * The addresses of the contact
   */
  addresses: Address[];
  /**
   * The uuid of the user who owns the contact
   */
  user_id?: string;
  field_mappings: FieldMappings;
}
interface FieldMappings {}
