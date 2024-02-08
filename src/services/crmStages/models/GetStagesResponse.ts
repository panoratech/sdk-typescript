import { UnifiedStageOutput } from './UnifiedStageOutput';

type Data = UnifiedStageOutput;

export interface GetStagesResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
