import { UnifiedAttachmentOutput } from '../../common/UnifiedAttachmentOutput';

type Data = UnifiedAttachmentOutput;

export interface DownloadAttachmentResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
