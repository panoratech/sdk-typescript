import BaseService from '../../BaseService';

import { GetCompaniesResponse } from './models/GetCompaniesResponse';
import { AddCompanyResponse } from './models/AddCompanyResponse';
import { UnifiedCompanyOutput } from './models/UnifiedCompanyOutput';
import { UpdateCompanyResponse } from './models/UpdateCompanyResponse';
import { UnifiedCompanyInput } from './models/UnifiedCompanyInput';
import { GetCompanyResponse } from './models/GetCompanyResponse';
import { AddCompaniesResponse } from './models/AddCompaniesResponse';
import { CrmCompaniesAddCompaniesResponse } from './models/CrmCompaniesAddCompaniesResponse';
import { AddCompaniesRequest } from './models/AddCompaniesRequest';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class CrmCompaniesService extends BaseService {
  /**
   * @summary List a batch of Companies

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetCompaniesResponse>} - The promise with the result
   */
  async getCompanies(
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetCompaniesResponse> {
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
    const urlEndpoint = '/crm/companies';
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
    const responseModel = response.data as GetCompaniesResponse;
    return responseModel;
  }

  /**
   * @summary Create a Company
   * @description Create a company in any supported Crm software

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<AddCompanyResponse|UnifiedCompanyOutput>} - The promise with the result
   */
  async addCompany(
    input: UnifiedCompanyInput,
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddCompanyResponse | UnifiedCompanyOutput> {
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
    const urlEndpoint = '/crm/companies';
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
    const responseModel = response.data as AddCompanyResponse | UnifiedCompanyOutput;
    return responseModel;
  }

  /**
   * @summary Update a Company

   * @param id Needed input variable
   * @returns {Promise<UpdateCompanyResponse>} - The promise with the result
   */
  async updateCompany(id: string): Promise<UpdateCompanyResponse> {
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (id) {
      queryParams.push(serializeQuery('form', true, 'id', id));
    }
    const urlEndpoint = '/crm/companies';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.patch(
      finalUrl,
      { id },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as UpdateCompanyResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve a Company
   * @description Retrieve a company from any connected Crm software

   * @param id id of the company you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetCompanyResponse>} - The promise with the result
   */
  async getCompany(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetCompanyResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/crm/companies/{id}';
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
    const responseModel = response.data as GetCompanyResponse;
    return responseModel;
  }

  /**
   * @summary Add a batch of Companies

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<AddCompaniesResponse|CrmCompaniesAddCompaniesResponse>} - The promise with the result
   */
  async addCompanies(
    input: AddCompaniesRequest,
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddCompaniesResponse | CrmCompaniesAddCompaniesResponse> {
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
    const urlEndpoint = '/crm/companies/batch';
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
    const responseModel = response.data as AddCompaniesResponse | CrmCompaniesAddCompaniesResponse;
    return responseModel;
  }
}
