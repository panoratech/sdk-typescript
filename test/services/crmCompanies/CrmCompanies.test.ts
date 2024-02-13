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
        .getCompanies('ab', { remoteData: true })
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
        async () => await sdk.crmCompanies.getCompanies('soluta', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .addCompany({}, 'dignissimos', { remoteData: true })
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
        async () => await sdk.crmCompanies.addCompany({}, 'id', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=5026944787')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .updateCompany('5026944787')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=8612630350')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.updateCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/companies?id=6599703194')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.updateCompany('6599703194'),
      ).rejects.toThrow();
    });
  });

  describe('test getCompany', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/3755054089?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .getCompany('3755054089', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/6473607450?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmCompanies.getCompany()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/companies/7568764380?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmCompanies.getCompany('7568764380', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addCompanies', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/companies/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmCompanies
        .addCompanies({}, 'nostrum', { remoteData: true })
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
        async () => await sdk.crmCompanies.addCompanies({}, 'sapiente', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
