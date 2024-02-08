import { UnifiedEngagementOutput } from './UnifiedEngagementOutput';

type Data = UnifiedEngagementOutput;

export interface AddEngagementsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
