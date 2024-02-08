import { UnifiedAttachmentOutput } from '../../common/UnifiedAttachmentOutput';

type Data = UnifiedAttachmentOutput;

export interface GetAttachmentsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
