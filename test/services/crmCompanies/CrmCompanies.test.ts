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
        .getCompanies('sed', { remoteData: true })
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
        async () => await sdk.crmCompanies.getCompanies('et', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .addCompany({}, 'non', { remoteData: true })
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
        async () => await sdk.crmCompanies.addCompany({}, 'tenetur', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=7978364749')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .updateCompany('7978364749')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=6991179018')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.updateCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=2167518955')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.updateCompany('2167518955'),
      ).rejects.toThrow();
    });
  });

  describe('test getCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/9678471415?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .getCompany('9678471415', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/1409394651?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.getCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/5620225159?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.getCompany('5620225159', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addCompanies', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .addCompanies({}, 'deleniti', { remoteData: true })
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
        async () => await sdk.crmCompanies.addCompanies({}, 'illo', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
