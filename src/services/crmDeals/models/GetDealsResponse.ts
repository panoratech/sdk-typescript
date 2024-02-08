import { UnifiedDealOutput } from './UnifiedDealOutput';

type Data = UnifiedDealOutput;

export interface GetDealsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
