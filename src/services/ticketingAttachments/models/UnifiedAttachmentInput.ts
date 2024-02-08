export interface UnifiedAttachmentInput {
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
}
interface FieldMappings {}
