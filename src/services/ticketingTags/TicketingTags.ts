import BaseService from '../../BaseService';

import { GetTagsResponse } from './models/GetTagsResponse';
import { GetTagResponse } from './models/GetTagResponse';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class TicketingTagsService extends BaseService {
  /**
   * @summary List a batch of Tags

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetTagsResponse>} - The promise with the result
   */
  async getTags(
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetTagsResponse> {
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
    const urlEndpoint = '/ticketing/tags';
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
    const responseModel = response.data as GetTagsResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve a Tag
   * @description Retrieve a tag from any connected Ticketing software

   * @param id id of the tag you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetTagResponse>} - The promise with the result
   */
  async getTag(id: string, optionalParams: { remoteData?: boolean } = {}): Promise<GetTagResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/ticketing/tags/{id}';
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
    const responseModel = response.data as GetTagResponse;
    return responseModel;
  }
}
