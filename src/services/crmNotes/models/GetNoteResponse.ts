import { UnifiedNoteOutput } from './UnifiedNoteOutput';

type Data = UnifiedNoteOutput;

export interface GetNoteResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
