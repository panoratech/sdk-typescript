import { UnifiedCompanyOutput } from './UnifiedCompanyOutput';

type Data = UnifiedCompanyOutput;

export interface AddCompanyResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
