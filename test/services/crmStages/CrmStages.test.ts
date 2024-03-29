import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { CrmStagesService } from '../../../src/services/crmStages/CrmStages';

describe('test CrmStagesService object', () => {
  it('should be an object', () => {
    expect(typeof CrmStagesService).toBe('function');
  });
});

describe('test CrmStages', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getStages', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/stages?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmStages
        .getStages('esse', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/stages?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmStages.getStages()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/stages?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmStages.getStages('natus', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getStage', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/stages/1450815172?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmStages
        .getStage('1450815172', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/stages/7458917368?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmStages.getStage()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/stages/5815269303?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmStages.getStage('5815269303', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
