import { UnifiedTaskOutput } from './UnifiedTaskOutput';

type Data = UnifiedTaskOutput;

export interface GetTasksResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
