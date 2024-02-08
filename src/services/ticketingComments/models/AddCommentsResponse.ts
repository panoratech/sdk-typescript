import { UnifiedCommentOutput } from './UnifiedCommentOutput';

type Data = UnifiedCommentOutput;

export interface AddCommentsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
