import { UnifiedTicketOutput } from './UnifiedTicketOutput';

type Data = UnifiedTicketOutput;

export interface AddTicketsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
