import BaseService from '../../BaseService';

import { serializeQuery } from '../../http/QuerySerializer';

export class EventsService extends BaseService {
  /**
   * @summary Retrieve Events

   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Needed input variable
   * @param optionalParams.pageSize - Needed input variable
   * @returns {Promise<any>} - The promise with the result
   */
  async getEvents(optionalParams: { page?: number; pageSize?: number } = {}): Promise<any> {
    const { page, pageSize } = optionalParams;

    const queryParams: string[] = [];
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (pageSize) {
      queryParams.push(serializeQuery('form', true, 'pageSize', pageSize));
    }
    const urlEndpoint = '/events';
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
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Retrieve Events Count

   * @returns {Promise<any>} - The promise with the result
   */
  async getEventsCount(): Promise<any> {
    const urlEndpoint = '/events/count';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }
}
