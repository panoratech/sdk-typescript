import BaseService from '../../BaseService';

import { GetDealsResponse } from './models/GetDealsResponse';
import { AddDealResponse } from './models/AddDealResponse';
import { UnifiedDealOutput } from './models/UnifiedDealOutput';
import { UnifiedDealInput } from './models/UnifiedDealInput';
import { GetDealResponse } from './models/GetDealResponse';
import { UpdateDealResponse } from './models/UpdateDealResponse';
import { AddDealsResponse } from './models/AddDealsResponse';
import { CrmDealsAddDealsResponse } from './models/CrmDealsAddDealsResponse';
import { AddDealsRequest } from './models/AddDealsRequest';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class CrmDealsService extends BaseService {
  /**
   * @summary List a batch of Deals

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetDealsResponse>} - The promise with the result
   */
  async getDeals(
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetDealsResponse> {
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
    const urlEndpoint = '/crm/deals';
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
    const responseModel = response.data as GetDealsResponse;
    return responseModel;
  }

  /**
   * @summary Create a Deal
   * @description Create a deal in any supported Crm software

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<AddDealResponse|UnifiedDealOutput>} - The promise with the result
   */
  async addDeal(
    input: UnifiedDealInput,
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddDealResponse | UnifiedDealOutput> {
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
    const urlEndpoint = '/crm/deals';
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
    const responseModel = response.data as AddDealResponse | UnifiedDealOutput;
    return responseModel;
  }

  /**
   * @summary Retrieve a Deal
   * @description Retrieve a deal from any connected Crm software

   * @param id id of the deal you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetDealResponse>} - The promise with the result
   */
  async getDeal(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetDealResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/crm/deals/{id}';
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
    const responseModel = response.data as GetDealResponse;
    return responseModel;
  }

  /**
   * @summary Update a Deal

   * @param id Needed input variable
   * @returns {Promise<UpdateDealResponse>} - The promise with the result
   */
  async updateDeal(id: string): Promise<UpdateDealResponse> {
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    let urlEndpoint = '/crm/deals/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false, id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.patch(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as UpdateDealResponse;
    return responseModel;
  }

  /**
   * @summary Add a batch of Deals

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<AddDealsResponse|CrmDealsAddDealsResponse>} - The promise with the result
   */
  async addDeals(
    input: AddDealsRequest,
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddDealsResponse | CrmDealsAddDealsResponse> {
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
    const urlEndpoint = '/crm/deals/batch';
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
    const responseModel = response.data as AddDealsResponse | CrmDealsAddDealsResponse;
    return responseModel;
  }
}
