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
        .getDeals('aliquam', { remoteData: true })
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
        async () => await sdk.crmDeals.getDeals('doloremque', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .addDeal({}, 'doloribus', { remoteData: true })
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
        async () => await sdk.crmDeals.addDeal({}, 'at', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/2664643614?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .getDeal('2664643614', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/1457041999?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.getDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/2377821653?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmDeals.getDeal('2377821653', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/4878976968')
        .reply(200, { data: {} });
      return sdk.crmDeals.updateDeal('4878976968').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/2203319079')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.updateDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/4081720380')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmDeals.updateDeal('4081720380')).rejects.toThrow();
    });
  });

  describe('test addDeals', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .addDeals({}, 'laboriosam', { remoteData: true })
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
        async () => await sdk.crmDeals.addDeals({}, 'ad', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
