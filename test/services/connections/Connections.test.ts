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
        .get('/connections/oauth/callback?state=cum&code=ut&location=ex')
        .reply(200, { data: {} });
      return sdk.connections
        .handleOAuthCallback('cum', 'ut', 'ex')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/connections/oauth/callback?state=ipsam&code=quas&location=optio')
        .reply(200, { data: {} });
      return expect(async () => await sdk.connections.handleOAuthCallback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/connections/oauth/callback?state=quod&code=maxime&location=dolores')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.connections.handleOAuthCallback('quod', 'maxime', 'dolores'),
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
