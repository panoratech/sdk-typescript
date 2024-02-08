import { UnifiedCommentOutput } from './UnifiedCommentOutput';

type Data = UnifiedCommentOutput;

export interface GetCommentsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
