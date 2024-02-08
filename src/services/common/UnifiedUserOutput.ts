export interface UnifiedUserOutput {
  /**
   * The name of the user
   */
  name: string;
  /**
   * The email address of the user
   */
  email_address: string;
  /**
   * The teams whose the user is part of
   */
  teams?: string[];
  field_mappings: FieldMappings;
  /**
   * The uuid of the user
   */
  id?: string;
  /**
   * The id of the user in the context of the 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
