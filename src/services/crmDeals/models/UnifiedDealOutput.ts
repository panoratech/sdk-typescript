export interface UnifiedDealOutput {
  field_mappings: FieldMappings;
  /**
   * The uuid of the deal
   */
  id?: string;
  /**
   * The id of the deal in the context of the Crm 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
