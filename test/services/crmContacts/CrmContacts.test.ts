import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { CrmContactsService } from '../../../src/services/crmContacts/CrmContacts';

describe('test CrmContactsService object', () => {
  it('should be an object', () => {
    expect(typeof CrmContactsService).toBe('function');
  });
});

describe('test CrmContacts', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .getContacts('ratione', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.getContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.getContacts('repudiandae', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .addContact({}, 'blanditiis', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.addContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.addContact({}, 'et', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=5159476568')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .updateContact('5159476568')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=8805283069')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.updateContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=6437127243')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.updateContact('6437127243'),
      ).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/9942138616?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .getContact('9942138616', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/3900683427?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/1311375099?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.getContact('1311375099', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .addContacts({}, 'error', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts/batch?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.addContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts/batch?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.addContacts({}, 'voluptatum', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
