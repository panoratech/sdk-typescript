import { UnifiedAttachmentOutput } from '../../common/UnifiedAttachmentOutput';

type Data = UnifiedAttachmentOutput;

export interface AddAttachmentResponse {
  message?: string;
  error?: string;
  statusCode: number;
  data?: Data;
}
