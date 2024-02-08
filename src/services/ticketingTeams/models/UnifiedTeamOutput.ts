export interface UnifiedTeamOutput {
  /**
   * The name of the team
   */
  name: string;
  /**
   * The description of the team
   */
  description?: string;
  field_mappings: FieldMappings;
  /**
   * The uuid of the team
   */
  id?: string;
  /**
   * The id of the team in the context of the 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
