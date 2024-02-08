export interface UnifiedAttachmentOutput {
  /**
   * The file name of the attachment
   */
  file_name: string;
  /**
   * The file url of the attachment
   */
  file_url: string;
  /**
   * The uploader's uuid of the attachment
   */
  uploader: string;
  field_mappings: FieldMappings;
  /**
   * The uuid of the attachment
   */
  id?: string;
  /**
   * The id of the attachment in the context of the 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface FieldMappings {}
interface RemoteData {}
