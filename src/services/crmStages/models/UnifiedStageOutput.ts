export interface UnifiedStageOutput {
  field_mappings: FieldMappings;
  /**
   * The uuid of the stage
   */
  id?: string;
  /**
   * The id of the stage in the context of the Crm 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
