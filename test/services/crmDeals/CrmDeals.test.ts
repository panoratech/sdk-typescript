import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { CrmDealsService } from '../../../src/services/crmDeals/CrmDeals';

describe('test CrmDealsService object', () => {
  it('should be an object', () => {
    expect(typeof CrmDealsService).toBe('function');
  });
});

describe('test CrmDeals', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getDeals', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .getDeals('corrupti', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.getDeals()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmDeals.getDeals('dolorum', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .addDeal({}, 'quaerat', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.addDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmDeals.addDeal({}, 'officiis', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/6059300953?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .getDeal('6059300953', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/8620055348?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.getDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/6792277212?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmDeals.getDeal('6792277212', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/3830864334')
        .reply(200, { data: {} });
      return sdk.crmDeals.updateDeal('3830864334').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/5491453275')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.updateDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/4663488034')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmDeals.updateDeal('4663488034')).rejects.toThrow();
    });
  });

  describe('test addDeals', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .addDeals({}, 'itaque', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals/batch?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.addDeals()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals/batch?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmDeals.addDeals({}, 'et', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
