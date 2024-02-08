import { UnifiedTicketOutput } from './UnifiedTicketOutput';

type Data = UnifiedTicketOutput;

export interface GetTicketsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
