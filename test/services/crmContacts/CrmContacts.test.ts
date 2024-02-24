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
        .getContacts('dolore', { remoteData: true })
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
        async () => await sdk.crmContacts.getContacts('molestias', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .addContact({}, 'totam', { remoteData: true })
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
        async () => await sdk.crmContacts.addContact({}, 'delectus', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=8130443299')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .updateContact('8130443299')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=5464243952')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.updateContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=1316280313')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.updateContact('1316280313'),
      ).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/6462282930?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .getContact('6462282930', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/3128820116?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/4685672345?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.getContact('4685672345', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .addContacts({}, 'in', { remoteData: true })
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
        async () => await sdk.crmContacts.addContacts({}, 'vero', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
