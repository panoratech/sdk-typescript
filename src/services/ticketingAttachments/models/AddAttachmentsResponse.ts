import { UnifiedAttachmentOutput } from '../../common/UnifiedAttachmentOutput';

type Data = UnifiedAttachmentOutput;

export interface AddAttachmentsResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
