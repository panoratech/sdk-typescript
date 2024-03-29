import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { ConnectionsService } from '../../../src/services/connections/Connections';

describe('test ConnectionsService object', () => {
  it('should be an object', () => {
    expect(typeof ConnectionsService).toBe('function');
  });
});

describe('test Connections', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test handleOAuthCallback', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/connections/oauth/callback?state=officiis&code=aut&location=cupiditate')
        .reply(200, { data: {} });
      return sdk.connections
        .handleOAuthCallback('officiis', 'aut', 'cupiditate')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/connections/oauth/callback?state=suscipit&code=quod&location=laudantium')
        .reply(200, { data: {} });
      return expect(async () => await sdk.connections.handleOAuthCallback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/connections/oauth/callback?state=aspernatur&code=vero&location=eum')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.connections.handleOAuthCallback('aspernatur', 'vero', 'eum'),
      ).rejects.toThrow();
    });
  });

  describe('test getConnections', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev').get('/connections').reply(200, { data: {} });
      return sdk.connections.getConnections().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
