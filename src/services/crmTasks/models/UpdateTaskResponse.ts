import { UnifiedTaskOutput } from './UnifiedTaskOutput';

type Data = UnifiedTaskOutput;

export interface UpdateTaskResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
