export interface UnifiedEngagementOutput {
  field_mappings: FieldMappings;
  /**
   * The uuid of the engagement
   */
  id?: string;
  /**
   * The id of the engagement in the context of the Crm 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
