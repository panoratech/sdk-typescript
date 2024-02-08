import BaseService from '../../BaseService';

import { GetContactsResponse } from '../common/GetContactsResponse';
import { AddContactResponse } from './models/AddContactResponse';
import { UnifiedContactOutput } from '../common/UnifiedContactOutput';
import { UnifiedContactInput } from './models/UnifiedContactInput';
import { GetContactResponse } from '../common/GetContactResponse';
import { AddContactsResponse } from './models/AddContactsResponse';
import { CrmContactsAddContactsResponse } from './models/CrmContactsAddContactsResponse';
import { AddContactsRequest } from './models/AddContactsRequest';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class CrmContactsService extends BaseService {
  /**
   * @summary List a batch of CRM Contacts

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original CRM software.
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
    const urlEndpoint = '/crm/contacts';
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
   * @summary Create CRM Contact
   * @description Create a contact in any supported CRM

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original CRM software.
   * @returns {Promise<AddContactResponse|UnifiedContactOutput>} - The promise with the result
   */
  async addContact(
    input: UnifiedContactInput,
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddContactResponse | UnifiedContactOutput> {
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
    const urlEndpoint = '/crm/contacts';
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
    const responseModel = response.data as AddContactResponse | UnifiedContactOutput;
    return responseModel;
  }

  /**
   * @summary Update a CRM Contact

   * @param id Needed input variable
   * @returns {Promise<UnifiedContactOutput>} - The promise with the result
   */
  async updateContact(id: string): Promise<UnifiedContactOutput> {
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (id) {
      queryParams.push(serializeQuery('form', true, 'id', id));
    }
    const urlEndpoint = '/crm/contacts';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.patch(
      finalUrl,
      { id },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as UnifiedContactOutput;
    return responseModel;
  }

  /**
   * @summary Retrieve a CRM Contact
   * @description Retrieve a contact from any connected CRM

   * @param id id of the `contact` you want to retrive.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original CRM software.
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
    let urlEndpoint = '/crm/contacts/{id}';
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

  /**
   * @summary Add a batch of CRM Contacts

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original CRM software.
   * @returns {Promise<AddContactsResponse|CrmContactsAddContactsResponse>} - The promise with the result
   */
  async addContacts(
    input: AddContactsRequest,
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddContactsResponse | CrmContactsAddContactsResponse> {
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
    const urlEndpoint = '/crm/contacts/batch';
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
    const responseModel = response.data as AddContactsResponse | CrmContactsAddContactsResponse;
    return responseModel;
  }
}
