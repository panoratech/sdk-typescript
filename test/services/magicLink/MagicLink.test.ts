import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { MagicLinkService } from '../../../src/services/magicLink/MagicLink';

describe('test MagicLinkService object', () => {
  it('should be an object', () => {
    expect(typeof MagicLinkService).toBe('function');
  });
});

describe('test MagicLink', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test createMagicLink', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/magic-link/create')
        .reply(200, { data: {} });
      return sdk.magicLink.createMagicLink({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getMagicLinks', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev').get('/magic-link').reply(200, { data: {} });
      return sdk.magicLink.getMagicLinks().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getMagicLink', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/magic-link/single?id=8696739146')
        .reply(200, { data: {} });
      return sdk.magicLink.getMagicLink('8696739146').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/magic-link/single?id=5694302358')
        .reply(200, { data: {} });
      return expect(async () => await sdk.magicLink.getMagicLink()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/magic-link/single?id=6852301969')
        .reply(404, { data: {} });
      return expect(async () => await sdk.magicLink.getMagicLink('6852301969')).rejects.toThrow();
    });
  });
});
