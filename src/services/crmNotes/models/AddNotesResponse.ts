import { UnifiedNoteOutput } from './UnifiedNoteOutput';

type Data = UnifiedNoteOutput;

export interface AddNotesResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
