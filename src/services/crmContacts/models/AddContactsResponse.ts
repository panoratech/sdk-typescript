import { UnifiedContactOutput } from '../../common/UnifiedContactOutput';

type Data = UnifiedContactOutput;

export interface AddContactsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
