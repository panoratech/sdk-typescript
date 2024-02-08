import { UnifiedDealOutput } from './UnifiedDealOutput';

type Data = UnifiedDealOutput;

export interface AddDealsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
