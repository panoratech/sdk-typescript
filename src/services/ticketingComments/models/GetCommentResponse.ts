import { UnifiedCommentOutput } from './UnifiedCommentOutput';

type Data = UnifiedCommentOutput;

export interface GetCommentResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
