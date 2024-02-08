import { UnifiedTeamOutput } from './UnifiedTeamOutput';

type Data = UnifiedTeamOutput;

export interface GetTeamsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
