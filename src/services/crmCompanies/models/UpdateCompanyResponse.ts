import { UnifiedCompanyOutput } from './UnifiedCompanyOutput';

type Data = UnifiedCompanyOutput;

export interface UpdateCompanyResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
