import { UnifiedEngagementOutput } from './UnifiedEngagementOutput';

type Data = UnifiedEngagementOutput;

export interface UpdateEngagementResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
