export interface UnifiedCompanyOutput {
  field_mappings: FieldMappings;
  /**
   * The uuid of the company
   */
  id?: string;
  /**
   * The id of the company in the context of the Crm 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
