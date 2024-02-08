import { UnifiedContactOutput } from './UnifiedContactOutput';

type Data = UnifiedContactOutput;

export interface GetContactsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
