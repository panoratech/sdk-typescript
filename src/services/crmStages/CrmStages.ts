import BaseService from '../../BaseService';

import { GetStagesResponse } from './models/GetStagesResponse';
import { GetStageResponse } from './models/GetStageResponse';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class CrmStagesService extends BaseService {
  /**
   * @summary List a batch of Stages

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetStagesResponse>} - The promise with the result
   */
  async getStages(
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetStagesResponse> {
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
    const urlEndpoint = '/crm/stages';
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
    const responseModel = response.data as GetStagesResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve a Stage
   * @description Retrieve a stage from any connected Crm software

   * @param id id of the stage you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetStageResponse>} - The promise with the result
   */
  async getStage(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetStageResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/crm/stages/{id}';
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
    const responseModel = response.data as GetStageResponse;
    return responseModel;
  }
}
