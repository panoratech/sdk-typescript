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
        .getEngagements('velit', { remoteData: true })
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
        async () => await sdk.crmEngagements.getEngagements('iste', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .addEngagement({}, 'dolorem', { remoteData: true })
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
        async () => await sdk.crmEngagements.addEngagement({}, 'laboriosam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=2083239415')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .updateEngagement('2083239415')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=5921165234')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.updateEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=1685037649')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.updateEngagement('1685037649'),
      ).rejects.toThrow();
    });
  });

  describe('test getEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/9939334883?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .getEngagement('9939334883', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/8698255430?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.getEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/3385392095?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.getEngagement('3385392095', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addEngagements', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .addEngagements({}, 'minus', { remoteData: true })
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
        async () => await sdk.crmEngagements.addEngagements({}, 'unde', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
