import { UnifiedStageOutput } from './UnifiedStageOutput';

type Data = UnifiedStageOutput;

export interface GetStageResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
