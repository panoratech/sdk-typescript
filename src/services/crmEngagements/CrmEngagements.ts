import BaseService from '../../BaseService';

import { GetEngagementsResponse } from './models/GetEngagementsResponse';
import { AddEngagementResponse } from './models/AddEngagementResponse';
import { UnifiedEngagementOutput } from './models/UnifiedEngagementOutput';
import { UpdateEngagementResponse } from './models/UpdateEngagementResponse';
import { UnifiedEngagementInput } from './models/UnifiedEngagementInput';
import { GetEngagementResponse } from './models/GetEngagementResponse';
import { AddEngagementsResponse } from './models/AddEngagementsResponse';
import { CrmEngagementsAddEngagementsResponse } from './models/CrmEngagementsAddEngagementsResponse';
import { AddEngagementsRequest } from './models/AddEngagementsRequest';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class CrmEngagementsService extends BaseService {
  /**
   * @summary List a batch of Engagements

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetEngagementsResponse>} - The promise with the result
   */
  async getEngagements(
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetEngagementsResponse> {
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
    const urlEndpoint = '/crm/engagements';
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
    const responseModel = response.data as GetEngagementsResponse;
    return responseModel;
  }

  /**
   * @summary Create a Engagement
   * @description Create a engagement in any supported Crm software

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<AddEngagementResponse|UnifiedEngagementOutput>} - The promise with the result
   */
  async addEngagement(
    input: UnifiedEngagementInput,
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddEngagementResponse | UnifiedEngagementOutput> {
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
    const urlEndpoint = '/crm/engagements';
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
    const responseModel = response.data as AddEngagementResponse | UnifiedEngagementOutput;
    return responseModel;
  }

  /**
   * @summary Update a Engagement

   * @param id Needed input variable
   * @returns {Promise<UpdateEngagementResponse>} - The promise with the result
   */
  async updateEngagement(id: string): Promise<UpdateEngagementResponse> {
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (id) {
      queryParams.push(serializeQuery('form', true, 'id', id));
    }
    const urlEndpoint = '/crm/engagements';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.patch(
      finalUrl,
      { id },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as UpdateEngagementResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve a Engagement
   * @description Retrieve a engagement from any connected Crm software

   * @param id id of the engagement you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetEngagementResponse>} - The promise with the result
   */
  async getEngagement(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetEngagementResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/crm/engagements/{id}';
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
    const responseModel = response.data as GetEngagementResponse;
    return responseModel;
  }

  /**
   * @summary Add a batch of Engagements

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<AddEngagementsResponse|CrmEngagementsAddEngagementsResponse>} - The promise with the result
   */
  async addEngagements(
    input: AddEngagementsRequest,
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddEngagementsResponse | CrmEngagementsAddEngagementsResponse> {
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
    const urlEndpoint = '/crm/engagements/batch';
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
      | AddEngagementsResponse
      | CrmEngagementsAddEngagementsResponse;
    return responseModel;
  }
}
