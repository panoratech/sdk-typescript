import { UnifiedTeamOutput } from './UnifiedTeamOutput';

type Data = UnifiedTeamOutput;

export interface GetTeamResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
