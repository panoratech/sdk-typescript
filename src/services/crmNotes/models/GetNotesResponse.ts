import { UnifiedNoteOutput } from './UnifiedNoteOutput';

type Data = UnifiedNoteOutput;

export interface GetNotesResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
