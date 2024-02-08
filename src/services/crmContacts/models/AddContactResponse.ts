import { UnifiedContactOutput } from '../../common/UnifiedContactOutput';

type Data = UnifiedContactOutput;

export interface AddContactResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
