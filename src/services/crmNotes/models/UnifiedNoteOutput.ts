export interface UnifiedNoteOutput {
  field_mappings: FieldMappings;
  /**
   * The uuid of the note
   */
  id?: string;
  /**
   * The id of the note in the context of the Crm 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
