import BaseService from '../../BaseService';

import { GetAccountsResponse } from './models/GetAccountsResponse';
import { GetAccountResponse } from './models/GetAccountResponse';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class TicketingAccountsService extends BaseService {
  /**
   * @summary List a batch of Accounts

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetAccountsResponse>} - The promise with the result
   */
  async getAccounts(
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetAccountsResponse> {
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
    const urlEndpoint = '/ticketing/accounts';
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
    const responseModel = response.data as GetAccountsResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve an Account
   * @description Retrieve an account from any connected Ticketing software

   * @param id id of the account you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetAccountResponse>} - The promise with the result
   */
  async getAccount(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetAccountResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/ticketing/accounts/{id}';
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
    const responseModel = response.data as GetAccountResponse;
    return responseModel;
  }
}
