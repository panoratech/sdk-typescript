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
        .getDeals('temporibus', { remoteData: true })
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
        async () => await sdk.crmDeals.getDeals('ullam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .addDeal({}, 'quae', { remoteData: true })
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
        async () => await sdk.crmDeals.addDeal({}, 'ab', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/1864835498?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .getDeal('1864835498', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/4889804697?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.getDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/deals/4006817859?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmDeals.getDeal('4006817859', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateDeal', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/3806703872')
        .reply(200, { data: {} });
      return sdk.crmDeals.updateDeal('3806703872').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/2052752553')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmDeals.updateDeal()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/deals/2427476657')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmDeals.updateDeal('2427476657')).rejects.toThrow();
    });
  });

  describe('test addDeals', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/deals/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmDeals
        .addDeals({}, 'ratione', { remoteData: true })
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
        async () => await sdk.crmDeals.addDeals({}, 'necessitatibus', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
