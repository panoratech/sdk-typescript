import { UnifiedAttachmentOutput } from '../../common/UnifiedAttachmentOutput';

type Data = UnifiedAttachmentOutput;

export interface GetAttachmentResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
