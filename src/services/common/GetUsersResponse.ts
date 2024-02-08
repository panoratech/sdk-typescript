import { UnifiedUserOutput } from './UnifiedUserOutput';

type Data = UnifiedUserOutput;

export interface GetUsersResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
