export interface UnifiedAccountOutput {
  /**
   * The name of the account
   */
  name: string;
  /**
   * The domains of the account
   */
  domains?: string[];
  field_mappings: FieldMappings;
  /**
   * The uuid of the account
   */
  id?: string;
  /**
   * The id of the account in the context of the 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
