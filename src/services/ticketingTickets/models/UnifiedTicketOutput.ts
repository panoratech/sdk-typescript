export interface UnifiedTicketOutput {
  /**
   * The name of the ticket
   */
  name: string;
  /**
   * The status of the ticket
   */
  status?: string;
  /**
   * The description of the ticket
   */
  description: string[];
  /**
   * The date the ticket is due
   */
  due_date?: string;
  /**
   * The uuid of the parent ticket
   */
  parent_ticket?: string;
  /**
   * The tags names of the ticket
   */
  tags?: string[];
  /**
   * The date the ticket has been completed
   */
  completed_at?: string;
  /**
   * The priority of the ticket
   */
  priority?: string;
  /**
   * The users uuids the ticket is assigned to
   */
  assigned_to?: string[];
  /**
   * The users uuids the ticket is assigned to
   */
  comment?: string[];
  /**
   * The uuid of the account which the ticket belongs to
   */
  account_id?: string;
  /**
   * The uuid of the contact which the ticket belongs to
   */
  contact_id?: string;
  field_mappings: FieldMappings;
  /**
   * The uuid of the ticket
   */
  id?: string;
  /**
   * The id of the ticket in the context of the 3rd Party
   */
  remote_id?: string;
  remote_data: RemoteData;
  /**
   * The type of the ticket
   */
  type_?: string;
}
interface FieldMappings {}
interface RemoteData {}
