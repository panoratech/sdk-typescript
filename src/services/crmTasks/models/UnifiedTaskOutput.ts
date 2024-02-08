export interface UnifiedTaskOutput {
  field_mappings: FieldMappings;
  /**
   * The uuid of the task
   */
  id?: string;
  /**
   * The id of the task in the context of the Crm 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
