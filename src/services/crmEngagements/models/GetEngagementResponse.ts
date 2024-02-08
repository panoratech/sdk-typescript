import { UnifiedEngagementOutput } from './UnifiedEngagementOutput';

type Data = UnifiedEngagementOutput;

export interface GetEngagementResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
