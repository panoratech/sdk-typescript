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
        .getEngagements('similique', { remoteData: true })
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
        async () => await sdk.crmEngagements.getEngagements('rerum', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .addEngagement({}, 'velit', { remoteData: true })
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
        async () => await sdk.crmEngagements.addEngagement({}, 'cum', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=7041933094')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .updateEngagement('7041933094')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=1078776505')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.updateEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=2170932722')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.updateEngagement('2170932722'),
      ).rejects.toThrow();
    });
  });

  describe('test getEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/4528258712?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .getEngagement('4528258712', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/8296040491?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.getEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/7940167274?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.getEngagement('7940167274', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addEngagements', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .addEngagements({}, 'illum', { remoteData: true })
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
        async () => await sdk.crmEngagements.addEngagements({}, 'tenetur', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
