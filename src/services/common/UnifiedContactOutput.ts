export interface UnifiedContactOutput {
  /**
   * The name of the contact
   */
  name: string;
  /**
   * The email address of the contact
   */
  email_address: string;
  /**
   * The phone number of the contact
   */
  phone_number?: string;
  /**
   * The details of the contact
   */
  details?: string;
  field_mappings: FieldMappings;
  /**
   * The uuid of the contact
   */
  id?: string;
  /**
   * The id of the contact in the context of the 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
