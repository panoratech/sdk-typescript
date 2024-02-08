import BaseService from '../../BaseService';

import { GetAttachmentsResponse } from './models/GetAttachmentsResponse';
import { AddAttachmentResponse } from './models/AddAttachmentResponse';
import { UnifiedAttachmentOutput } from '../common/UnifiedAttachmentOutput';
import { UnifiedAttachmentInput } from './models/UnifiedAttachmentInput';
import { GetAttachmentResponse } from './models/GetAttachmentResponse';
import { DownloadAttachmentResponse } from './models/DownloadAttachmentResponse';
import { AddAttachmentsResponse } from './models/AddAttachmentsResponse';
import { TicketingAttachmentsAddAttachmentsResponse } from './models/TicketingAttachmentsAddAttachmentsResponse';
import { AddAttachmentsRequest } from './models/AddAttachmentsRequest';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class TicketingAttachmentsService extends BaseService {
  /**
   * @summary List a batch of Attachments

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetAttachmentsResponse>} - The promise with the result
   */
  async getAttachments(
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetAttachmentsResponse> {
    const { remoteData } = optionalParams;
    if (connectionToken === undefined) {
      throw new Error(
        'The following parameter is required: connectionToken, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = {};
    if (connectionToken !== undefined) {
      headers['connection_token'] = serializeHeader(false, connectionToken);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlEndpoint = '/ticketing/attachments';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as GetAttachmentsResponse;
    return responseModel;
  }

  /**
   * @summary Create a Attachment
   * @description Create a attachment in any supported Ticketing software

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<AddAttachmentResponse|UnifiedAttachmentOutput>} - The promise with the result
   */
  async addAttachment(
    input: UnifiedAttachmentInput,
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddAttachmentResponse | UnifiedAttachmentOutput> {
    const { remoteData } = optionalParams;
    if (connectionToken === undefined) {
      throw new Error(
        'The following parameter is required: connectionToken, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (connectionToken !== undefined) {
      headers['connection_token'] = serializeHeader(false, connectionToken);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlEndpoint = '/ticketing/attachments';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as AddAttachmentResponse | UnifiedAttachmentOutput;
    return responseModel;
  }

  /**
   * @summary Retrieve a Attachment
   * @description Retrieve a attachment from any connected Ticketing software

   * @param id id of the attachment you want to retrive.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetAttachmentResponse>} - The promise with the result
   */
  async getAttachment(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetAttachmentResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/ticketing/attachments/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false, id, undefined));
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as GetAttachmentResponse;
    return responseModel;
  }

  /**
   * @summary Download a Attachment
   * @description Download a attachment from any connected Ticketing software

   * @param id id of the attachment you want to retrive.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<DownloadAttachmentResponse>} - The promise with the result
   */
  async downloadAttachment(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<DownloadAttachmentResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/ticketing/attachments/{id}/download';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false, id, undefined));
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as DownloadAttachmentResponse;
    return responseModel;
  }

  /**
   * @summary Add a batch of Attachments

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<AddAttachmentsResponse|TicketingAttachmentsAddAttachmentsResponse>} - The promise with the result
   */
  async addAttachments(
    input: AddAttachmentsRequest,
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddAttachmentsResponse | TicketingAttachmentsAddAttachmentsResponse> {
    const { remoteData } = optionalParams;
    if (connectionToken === undefined) {
      throw new Error(
        'The following parameter is required: connectionToken, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (connectionToken !== undefined) {
      headers['connection_token'] = serializeHeader(false, connectionToken);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlEndpoint = '/ticketing/attachments/batch';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as
      | AddAttachmentsResponse
      | TicketingAttachmentsAddAttachmentsResponse;
    return responseModel;
  }
}
