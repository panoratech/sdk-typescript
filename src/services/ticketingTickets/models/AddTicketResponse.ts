import { UnifiedTicketOutput } from './UnifiedTicketOutput';

type Data = UnifiedTicketOutput;

export interface AddTicketResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
