import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { WebhookService } from '../../../src/services/webhook/Webhook';

describe('test WebhookService object', () => {
  it('should be an object', () => {
    expect(typeof WebhookService).toBe('function');
  });
});

describe('test Webhook', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getWebhooksMetadata', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev').get('/webhook').reply(200, { data: {} });
      return sdk.webhook.getWebhooksMetadata().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test createWebhookMetadata', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev').post('/webhook').reply(200, { data: {} });
      return sdk.webhook.createWebhookMetadata({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test updateWebhookStatus', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .put('/webhook/6680933975')
        .reply(200, { data: {} });
      return sdk.webhook
        .updateWebhookStatus('6680933975')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .put('/webhook/9608634190')
        .reply(200, { data: {} });
      return expect(async () => await sdk.webhook.updateWebhookStatus()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .put('/webhook/1754940662')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.webhook.updateWebhookStatus('1754940662'),
      ).rejects.toThrow();
    });
  });
});