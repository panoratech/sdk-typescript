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
        .getDeals('exercitationem', { remoteData: true })
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
        async () => await sdk.crmDeals.getDeals('rem', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .addDeal({}, 'veritatis', { remoteData: true })
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
        async () => await sdk.crmDeals.addDeal({}, 'nisi', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/9130170700?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .getDeal('9130170700', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/2165122493?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.getDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/9375937056?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmDeals.getDeal('9375937056', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/5953265923')
        .reply(200, { data: {} });
      return sdk.crmDeals.updateDeal('5953265923').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/5142793957')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.updateDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/3959943376')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmDeals.updateDeal('3959943376')).rejects.toThrow();
    });
  });

  describe('test addDeals', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .addDeals({}, 'ut', { remoteData: true })
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
        async () => await sdk.crmDeals.addDeals({}, 'ullam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
