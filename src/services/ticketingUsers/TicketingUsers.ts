import BaseService from '../../BaseService';

import { GetUsersResponse } from '../common/GetUsersResponse';
import { GetUserResponse } from '../common/GetUserResponse';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class TicketingUsersService extends BaseService {
  /**
   * @summary List a batch of Users

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetUsersResponse>} - The promise with the result
   */
  async getUsers(
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetUsersResponse> {
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
    const urlEndpoint = '/ticketing/users';
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
    const responseModel = response.data as GetUsersResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve a User
   * @description Retrieve a user from any connected Ticketing software

   * @param id id of the user you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetUserResponse>} - The promise with the result
   */
  async getUser(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetUserResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/ticketing/users/{id}';
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
    const responseModel = response.data as GetUserResponse;
    return responseModel;
  }
}
