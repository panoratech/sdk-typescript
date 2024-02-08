import { UnifiedTagOutput } from './UnifiedTagOutput';

type Data = UnifiedTagOutput;

export interface GetTagResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
