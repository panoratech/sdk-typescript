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
        .getEngagements('facilis', { remoteData: true })
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
        async () => await sdk.crmEngagements.getEngagements('libero', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .addEngagement({}, 'distinctio', { remoteData: true })
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
        async () => await sdk.crmEngagements.addEngagement({}, 'delectus', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=3919116384')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .updateEngagement('3919116384')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=7425061772')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.updateEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=4321541842')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.updateEngagement('4321541842'),
      ).rejects.toThrow();
    });
  });

  describe('test getEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/6736979802?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .getEngagement('6736979802', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/7346690440?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.getEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/3228260615?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.getEngagement('3228260615', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addEngagements', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .addEngagements({}, 'adipisci', { remoteData: true })
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
        async () => await sdk.crmEngagements.addEngagements({}, 'iste', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
