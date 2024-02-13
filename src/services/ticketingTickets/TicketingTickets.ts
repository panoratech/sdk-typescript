import BaseService from '../../BaseService';

import { GetTicketsResponse } from './models/GetTicketsResponse';
import { AddTicketResponse } from './models/AddTicketResponse';
import { UnifiedTicketOutput } from './models/UnifiedTicketOutput';
import { UnifiedTicketInput } from './models/UnifiedTicketInput';
import { GetTicketResponse } from './models/GetTicketResponse';
import { AddTicketsResponse } from './models/AddTicketsResponse';
import { TicketingTicketsAddTicketsResponse } from './models/TicketingTicketsAddTicketsResponse';
import { AddTicketsRequest } from './models/AddTicketsRequest';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class TicketingTicketsService extends BaseService {
  /**
   * @summary List a batch of Tickets

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetTicketsResponse>} - The promise with the result
   */
  async getTickets(
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetTicketsResponse> {
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
    const urlEndpoint = '/ticketing/tickets';
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
    const responseModel = response.data as GetTicketsResponse;
    return responseModel;
  }

  /**
   * @summary Create a Ticket
   * @description Create a ticket in any supported Ticketing software

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<AddTicketResponse|UnifiedTicketOutput>} - The promise with the result
   */
  async addTicket(
    input: UnifiedTicketInput,
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddTicketResponse | UnifiedTicketOutput> {
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
    const urlEndpoint = '/ticketing/tickets';
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
    const responseModel = response.data as AddTicketResponse | UnifiedTicketOutput;
    return responseModel;
  }

  /**
   * @summary Update a Ticket

   * @param id Needed input variable
   * @returns {Promise<UnifiedTicketOutput>} - The promise with the result
   */
  async updateTicket(id: string): Promise<UnifiedTicketOutput> {
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (id) {
      queryParams.push(serializeQuery('form', true, 'id', id));
    }
    const urlEndpoint = '/ticketing/tickets';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.patch(
      finalUrl,
      { id },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as UnifiedTicketOutput;
    return responseModel;
  }

  /**
   * @summary Retrieve a Ticket
   * @description Retrieve a ticket from any connected Ticketing software

   * @param id id of the `ticket` you want to retrive.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<GetTicketResponse>} - The promise with the result
   */
  async getTicket(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetTicketResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/ticketing/tickets/{id}';
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
    const responseModel = response.data as GetTicketResponse;
    return responseModel;
  }

  /**
   * @summary Add a batch of Tickets

   * @param xConnectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<AddTicketsResponse|TicketingTicketsAddTicketsResponse>} - The promise with the result
   */
  async addTickets(
    input: AddTicketsRequest,
    xConnectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddTicketsResponse | TicketingTicketsAddTicketsResponse> {
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
    const urlEndpoint = '/ticketing/tickets/batch';
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
    const responseModel = response.data as AddTicketsResponse | TicketingTicketsAddTicketsResponse;
    return responseModel;
  }
}
