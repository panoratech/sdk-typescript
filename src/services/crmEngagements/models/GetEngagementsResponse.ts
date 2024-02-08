import { UnifiedEngagementOutput } from './UnifiedEngagementOutput';

type Data = UnifiedEngagementOutput;

export interface GetEngagementsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
