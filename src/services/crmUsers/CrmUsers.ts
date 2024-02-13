import BaseService from '../../BaseService';

import { GetUsersResponse } from '../common/GetUsersResponse';
import { GetUserResponse } from '../common/GetUserResponse';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class CrmUsersService extends BaseService {
  /**
   * @summary List a batch of Users

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetUsersResponse>} - The promise with the result
   */
  async getUsers(
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetUsersResponse> {
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
    const urlEndpoint = '/crm/users';
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
   * @description Retrieve a user from any connected Crm software

   * @param id id of the user you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
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
    let urlEndpoint = '/crm/users/{id}';
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
