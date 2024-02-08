import { UnifiedTaskOutput } from './UnifiedTaskOutput';

type Data = UnifiedTaskOutput;

export interface AddTasksResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
