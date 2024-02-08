import { UnifiedAttachmentOutput } from '../../common/UnifiedAttachmentOutput';

export interface UnifiedCommentOutput {
  /**
   * The body of the comment
   */
  body: string;
  /**
   * The html body of the comment
   */
  html_body?: string;
  /**
   * The public status of the comment
   */
  is_private?: boolean;
  /**
   * The creator type of the comment (either user or contact)
   */
  creator_type?: string;
  /**
   * The uuid of the ticket the comment is tied to
   */
  ticket_id?: string;
  /**
   * The uuid of the contact which the comment belongs to (if no user_id specified)
   */
  contact_id?: string;
  /**
   * The uuid of the user which the comment belongs to (if no contact_id specified)
   */
  user_id?: string;
  /**
   * The attachemnets tied to the comment
   */
  attachments?: UnifiedAttachmentOutput[];
  /**
   * The uuid of the comment
   */
  id?: string;
  /**
   * The id of the comment in the context of the 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
}
interface RemoteData {}
