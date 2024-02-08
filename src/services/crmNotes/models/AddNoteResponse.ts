import { UnifiedNoteOutput } from './UnifiedNoteOutput';

type Data = UnifiedNoteOutput;

export interface AddNoteResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
