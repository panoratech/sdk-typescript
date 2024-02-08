import { UnifiedDealOutput } from './UnifiedDealOutput';

type Data = UnifiedDealOutput;

export interface AddDealResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
