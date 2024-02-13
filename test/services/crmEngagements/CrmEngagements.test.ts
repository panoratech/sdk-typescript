import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { CrmEngagementsService } from '../../../src/services/crmEngagements/CrmEngagements';

describe('test CrmEngagementsService object', () => {
  it('should be an object', () => {
    expect(typeof CrmEngagementsService).toBe('function');
  });
});

describe('test CrmEngagements', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getEngagements', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .getEngagements('labore', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.getEngagements()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.getEngagements('magnam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .addEngagement({}, 'unde', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.addEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.addEngagement({}, 'sequi', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=8413611719')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .updateEngagement('8413611719')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=6557195442')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.updateEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=1255395211')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.updateEngagement('1255395211'),
      ).rejects.toThrow();
    });
  });

  describe('test getEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/1350248369?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .getEngagement('1350248369', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/3759419178?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.getEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/8990471532?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.getEngagement('8990471532', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addEngagements', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .addEngagements({}, 'quidem', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements/batch?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.addEngagements()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements/batch?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.addEngagements({}, 'atque', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
