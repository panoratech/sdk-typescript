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
        .getEngagements('adipisci', { remoteData: true })
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
        async () => await sdk.crmEngagements.getEngagements('voluptas', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .addEngagement({}, 'ab', { remoteData: true })
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
        async () => await sdk.crmEngagements.addEngagement({}, 'pariatur', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=2070813733')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .updateEngagement('2070813733')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=3961907686')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.updateEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/engagements?id=3331937272')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.updateEngagement('3331937272'),
      ).rejects.toThrow();
    });
  });

  describe('test getEngagement', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/2607281921?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .getEngagement('2607281921', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/3255612595?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmEngagements.getEngagement()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/engagements/1046100912?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmEngagements.getEngagement('1046100912', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addEngagements', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/engagements/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmEngagements
        .addEngagements({}, 'iusto', { remoteData: true })
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
        async () => await sdk.crmEngagements.addEngagements({}, 'doloremque', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
