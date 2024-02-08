import { UnifiedTaskOutput } from './UnifiedTaskOutput';

type Data = UnifiedTaskOutput;

export interface AddTaskResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
