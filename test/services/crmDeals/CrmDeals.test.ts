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
        .getDeals('adipisci', { remoteData: true })
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
        async () => await sdk.crmDeals.getDeals('illo', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .addDeal({}, 'nostrum', { remoteData: true })
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
        async () => await sdk.crmDeals.addDeal({}, 'porro', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/2809784680?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .getDeal('2809784680', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/9183354240?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.getDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/3656101438?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmDeals.getDeal('3656101438', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/7043225444')
        .reply(200, { data: {} });
      return sdk.crmDeals.updateDeal('7043225444').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/8458061773')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.updateDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/2431740940')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmDeals.updateDeal('2431740940')).rejects.toThrow();
    });
  });

  describe('test addDeals', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .addDeals({}, 'quis', { remoteData: true })
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
        async () => await sdk.crmDeals.addDeals({}, 'adipisci', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
