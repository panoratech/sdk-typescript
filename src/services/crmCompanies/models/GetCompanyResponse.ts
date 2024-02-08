import { UnifiedCompanyOutput } from './UnifiedCompanyOutput';

type Data = UnifiedCompanyOutput;

export interface GetCompanyResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
