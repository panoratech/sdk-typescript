import { UnifiedAccountOutput } from './UnifiedAccountOutput';

type Data = UnifiedAccountOutput;

export interface GetAccountsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
