import { UnifiedCommentOutput } from './UnifiedCommentOutput';

type Data = UnifiedCommentOutput;

export interface AddCommentResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
