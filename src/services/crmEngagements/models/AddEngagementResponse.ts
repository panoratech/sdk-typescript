import { UnifiedEngagementOutput } from './UnifiedEngagementOutput';

type Data = UnifiedEngagementOutput;

export interface AddEngagementResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
