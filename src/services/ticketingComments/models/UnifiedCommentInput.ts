export interface UnifiedCommentInput {
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
   * The attachements uuids tied to the comment
   */
  attachments?: string[];
}
