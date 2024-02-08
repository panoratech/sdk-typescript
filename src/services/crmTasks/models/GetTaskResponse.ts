import { UnifiedTaskOutput } from './UnifiedTaskOutput';

type Data = UnifiedTaskOutput;

export interface GetTaskResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
