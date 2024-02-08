import { UnifiedContactOutput } from './UnifiedContactOutput';

type Data = UnifiedContactOutput;

export interface GetContactResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
