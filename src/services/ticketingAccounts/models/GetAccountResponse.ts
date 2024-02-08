import { UnifiedAccountOutput } from './UnifiedAccountOutput';

type Data = UnifiedAccountOutput;

export interface GetAccountResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
