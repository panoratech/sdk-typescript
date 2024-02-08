import BaseService from '../../BaseService';

import { GetNotesResponse } from './models/GetNotesResponse';
import { AddNoteResponse } from './models/AddNoteResponse';
import { UnifiedNoteOutput } from './models/UnifiedNoteOutput';
import { UnifiedNoteInput } from './models/UnifiedNoteInput';
import { GetNoteResponse } from './models/GetNoteResponse';
import { AddNotesResponse } from './models/AddNotesResponse';
import { CrmNotesAddNotesResponse } from './models/CrmNotesAddNotesResponse';
import { AddNotesRequest } from './models/AddNotesRequest';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class CrmNotesService extends BaseService {
  /**
   * @summary List a batch of Notes

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetNotesResponse>} - The promise with the result
   */
  async getNotes(
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetNotesResponse> {
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
    const urlEndpoint = '/crm/notes';
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
    const responseModel = response.data as GetNotesResponse;
    return responseModel;
  }

  /**
   * @summary Create a Note
   * @description Create a note in any supported Crm software

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<AddNoteResponse|UnifiedNoteOutput>} - The promise with the result
   */
  async addNote(
    input: UnifiedNoteInput,
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddNoteResponse | UnifiedNoteOutput> {
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
    const urlEndpoint = '/crm/notes';
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
    const responseModel = response.data as AddNoteResponse | UnifiedNoteOutput;
    return responseModel;
  }

  /**
   * @summary Retrieve a Note
   * @description Retrieve a note from any connected Crm software

   * @param id id of the note you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetNoteResponse>} - The promise with the result
   */
  async getNote(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetNoteResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/crm/notes/{id}';
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
    const responseModel = response.data as GetNoteResponse;
    return responseModel;
  }

  /**
   * @summary Add a batch of Notes

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<AddNotesResponse|CrmNotesAddNotesResponse>} - The promise with the result
   */
  async addNotes(
    input: AddNotesRequest,
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddNotesResponse | CrmNotesAddNotesResponse> {
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
    const urlEndpoint = '/crm/notes/batch';
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
    const responseModel = response.data as AddNotesResponse | CrmNotesAddNotesResponse;
    return responseModel;
  }
}
