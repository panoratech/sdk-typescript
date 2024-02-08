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
        .getCompanies('molestias', { remoteData: true })
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
        async () => await sdk.crmCompanies.getCompanies('autem', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .addCompany({}, 'quos', { remoteData: true })
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
        async () => await sdk.crmCompanies.addCompany({}, 'doloremque', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=2206547324')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .updateCompany('2206547324')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=9920618896')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.updateCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=5437943828')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.updateCompany('5437943828'),
      ).rejects.toThrow();
    });
  });

  describe('test getCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/3364910789?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .getCompany('3364910789', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/8954837843?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.getCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/7667802936?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.getCompany('7667802936', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addCompanies', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .addCompanies({}, 'pariatur', { remoteData: true })
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
        async () => await sdk.crmCompanies.addCompanies({}, 'saepe', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
