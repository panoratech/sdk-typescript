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
        .getCompanies('sunt', { remoteData: true })
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
        async () => await sdk.crmCompanies.getCompanies('nemo', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .addCompany({}, 'amet', { remoteData: true })
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
        async () => await sdk.crmCompanies.addCompany({}, 'accusamus', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=7517121728')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .updateCompany('7517121728')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=2201365563')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.updateCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=1001230332')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.updateCompany('1001230332'),
      ).rejects.toThrow();
    });
  });

  describe('test getCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/4992271085?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .getCompany('4992271085', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/4187247031?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.getCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/1414421714?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.getCompany('1414421714', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addCompanies', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .addCompanies({}, 'ut', { remoteData: true })
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
        async () => await sdk.crmCompanies.addCompanies({}, 'exercitationem', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
