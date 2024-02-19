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
        .getContacts('sit', { remoteData: true })
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
        async () => await sdk.crmContacts.getContacts('dolore', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .addContact({}, 'fugiat', { remoteData: true })
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
        async () => await sdk.crmContacts.addContact({}, 'quod', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=1136660508')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .updateContact('1136660508')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=3344544724')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.updateContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/contacts?id=4806978479')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.updateContact('4806978479'),
      ).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/5909336449?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .getContact('5909336449', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/2078691894?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContacts.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/contacts/1864944236?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContacts.getContact('1864944236', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/contacts/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContacts
        .addContacts({}, 'repellat', { remoteData: true })
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
        async () => await sdk.crmContacts.addContacts({}, 'aliquam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
