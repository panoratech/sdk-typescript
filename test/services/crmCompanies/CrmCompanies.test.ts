import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { CrmCompaniesService } from '../../../src/services/crmCompanies/CrmCompanies';

describe('test CrmCompaniesService object', () => {
  it('should be an object', () => {
    expect(typeof CrmCompaniesService).toBe('function');
  });
});

describe('test CrmCompanies', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getCompanies', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .getCompanies('voluptatum', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.getCompanies()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.getCompanies('amet', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .addCompany({}, 'accusantium', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.addCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.addCompany({}, 'voluptatem', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=1896467310')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .updateCompany('1896467310')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=8745238688')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.updateCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=2767327598')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.updateCompany('2767327598'),
      ).rejects.toThrow();
    });
  });

  describe('test getCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/5323737889?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .getCompany('5323737889', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/7812980102?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.getCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/7438569130?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.getCompany('7438569130', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addCompanies', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .addCompanies({}, 'distinctio', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies/batch?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.addCompanies()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies/batch?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.addCompanies({}, 'vero', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
