import BaseService from '../../BaseService';

import { GetCommentsResponse } from './models/GetCommentsResponse';
import { AddCommentResponse } from './models/AddCommentResponse';
import { UnifiedCommentOutput } from './models/UnifiedCommentOutput';
import { UnifiedCommentInput } from './models/UnifiedCommentInput';
import { GetCommentResponse } from './models/GetCommentResponse';
import { AddCommentsResponse } from './models/AddCommentsResponse';
import { TicketingCommentsAddCommentsResponse } from './models/TicketingCommentsAddCommentsResponse';
import { AddCommentsRequest } from './models/AddCommentsRequest';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class TicketingCommentsService extends BaseService {
  /**
   * @summary List a batch of Comments

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetCommentsResponse>} - The promise with the result
   */
  async getComments(
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetCommentsResponse> {
    const { remoteData } = optionalParams;
    if (xConnectionToken === undefined) {
      throw new Error(
        'The following parameter is required: xConnectionToken, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = {};
    if (xConnectionToken !== undefined) {
      headers['x-connection-token'] = serializeHeader(false, xConnectionToken);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlEndpoint = '/ticketing/comments';
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
    const responseModel = response.data as GetCommentsResponse;
    return responseModel;
  }

  /**
   * @summary Create a Comment
   * @description Create a comment in any supported Ticketing software

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<AddCommentResponse|UnifiedCommentOutput>} - The promise with the result
   */
  async addComment(
    input: UnifiedCommentInput,
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddCommentResponse | UnifiedCommentOutput> {
    const { remoteData } = optionalParams;
    if (xConnectionToken === undefined) {
      throw new Error(
        'The following parameter is required: xConnectionToken, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (xConnectionToken !== undefined) {
      headers['x-connection-token'] = serializeHeader(false, xConnectionToken);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlEndpoint = '/ticketing/comments';
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
    const responseModel = response.data as AddCommentResponse | UnifiedCommentOutput;
    return responseModel;
  }

  /**
   * @summary Retrieve a Comment
   * @description Retrieve a comment from any connected Ticketing software

   * @param id id of the `comment` you want to retrive.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetCommentResponse>} - The promise with the result
   */
  async getComment(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetCommentResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/ticketing/comments/{id}';
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
    const responseModel = response.data as GetCommentResponse;
    return responseModel;
  }

  /**
   * @summary Add a batch of Comments

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<AddCommentsResponse|TicketingCommentsAddCommentsResponse>} - The promise with the result
   */
  async addComments(
    input: AddCommentsRequest,
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddCommentsResponse | TicketingCommentsAddCommentsResponse> {
    const { remoteData } = optionalParams;
    if (xConnectionToken === undefined) {
      throw new Error(
        'The following parameter is required: xConnectionToken, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (xConnectionToken !== undefined) {
      headers['x-connection-token'] = serializeHeader(false, xConnectionToken);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlEndpoint = '/ticketing/comments/batch';
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
      | AddCommentsResponse
      | TicketingCommentsAddCommentsResponse;
    return responseModel;
  }
}
