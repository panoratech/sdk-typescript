import { UnifiedDealOutput } from './UnifiedDealOutput';

type Data = UnifiedDealOutput;

export interface GetDealResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
