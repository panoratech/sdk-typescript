export interface UnifiedTagOutput {
  /**
   * The name of the tag
   */
  name: string;
  field_mappings: FieldMappings;
  /**
   * The uuid of the tag
   */
  id?: string;
  /**
   * The id of the tag in the context of the 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
