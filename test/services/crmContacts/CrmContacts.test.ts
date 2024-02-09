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
        .getContacts('possimus', { remoteData: true })
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
        async () => await sdk.crmContacts.getContacts('velit', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .addContact({}, 'nam', { remoteData: true })
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
        async () => await sdk.crmContacts.addContact({}, 'ipsam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=8674746207')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .updateContact('8674746207')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=1529198163')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.updateContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=4292606182')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.updateContact('4292606182'),
      ).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/9644520458?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .getContact('9644520458', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/4780045297?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/5592612363?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.getContact('5592612363', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .addContacts({}, 'quas', { remoteData: true })
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
        async () => await sdk.crmContacts.addContacts({}, 'repellat', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
