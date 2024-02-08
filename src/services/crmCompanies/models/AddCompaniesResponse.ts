import { UnifiedCompanyOutput } from './UnifiedCompanyOutput';

type Data = UnifiedCompanyOutput;

export interface AddCompaniesResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
