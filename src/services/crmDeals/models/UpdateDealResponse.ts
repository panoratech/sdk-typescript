import { UnifiedDealOutput } from './UnifiedDealOutput';

type Data = UnifiedDealOutput;

export interface UpdateDealResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
