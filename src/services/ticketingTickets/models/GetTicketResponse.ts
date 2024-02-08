import { UnifiedTicketOutput } from './UnifiedTicketOutput';

type Data = UnifiedTicketOutput;

export interface GetTicketResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
