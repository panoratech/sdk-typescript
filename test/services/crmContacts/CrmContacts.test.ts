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
        .getContacts('veniam', { remoteData: true })
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
        async () => await sdk.crmContacts.getContacts('occaecati', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .addContact({}, 'nulla', { remoteData: true })
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
        async () => await sdk.crmContacts.addContact({}, 'dolores', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=6946575041')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .updateContact('6946575041')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=4257185745')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.updateContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=3369669675')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.updateContact('3369669675'),
      ).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/7958898481?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .getContact('7958898481', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/6872104567?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/7156317532?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.getContact('7156317532', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .addContacts({}, 'labore', { remoteData: true })
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
        async () => await sdk.crmContacts.addContacts({}, 'perferendis', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
