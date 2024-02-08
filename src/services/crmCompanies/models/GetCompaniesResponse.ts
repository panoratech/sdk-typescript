import { UnifiedCompanyOutput } from './UnifiedCompanyOutput';

type Data = UnifiedCompanyOutput;

export interface GetCompaniesResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
