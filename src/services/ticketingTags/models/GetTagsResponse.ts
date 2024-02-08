import { UnifiedTagOutput } from './UnifiedTagOutput';

type Data = UnifiedTagOutput;

export interface GetTagsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
