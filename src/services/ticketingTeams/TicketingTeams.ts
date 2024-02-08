import BaseService from '../../BaseService';

import { GetTeamsResponse } from './models/GetTeamsResponse';
import { GetTeamResponse } from './models/GetTeamResponse';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class TicketingTeamsService extends BaseService {
  /**
   * @summary List a batch of Teams

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetTeamsResponse>} - The promise with the result
   */
  async getTeams(
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetTeamsResponse> {
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
    const urlEndpoint = '/ticketing/teams';
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
    const responseModel = response.data as GetTeamsResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve a Team
   * @description Retrieve a team from any connected Ticketing software

   * @param id id of the team you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetTeamResponse>} - The promise with the result
   */
  async getTeam(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetTeamResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/ticketing/teams/{id}';
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
    const responseModel = response.data as GetTeamResponse;
    return responseModel;
  }
}
