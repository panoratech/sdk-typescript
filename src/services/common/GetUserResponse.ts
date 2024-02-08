import { UnifiedUserOutput } from './UnifiedUserOutput';

type Data = UnifiedUserOutput;

export interface GetUserResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
