import BaseService from '../../BaseService';

export class HealthService extends BaseService {
  async getHealth(): Promise<any> {
    const urlEndpoint = '/health';
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
