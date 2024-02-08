import BaseService from '../../BaseService';

import { GetContactsResponse } from '../common/GetContactsResponse';
import { GetContactResponse } from '../common/GetContactResponse';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class TicketingContactsService extends BaseService {
  /**
   * @summary List a batch of Contacts

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetContactsResponse>} - The promise with the result
   */
  async getContacts(
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetContactsResponse> {
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
    const urlEndpoint = '/ticketing/contacts';
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
    const responseModel = response.data as GetContactsResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve a Contact
   * @description Retrieve a contact from any connected Ticketing software

   * @param id id of the contact you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetContactResponse>} - The promise with the result
   */
  async getContact(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetContactResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/ticketing/contacts/{id}';
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
    const responseModel = response.data as GetContactResponse;
    return responseModel;
  }
}
