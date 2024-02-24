import BaseService from '../../BaseService';

export class StytchService extends BaseService {
  async stytchprotected(): Promise<any> {
    const urlEndpoint = '/stytch';
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
