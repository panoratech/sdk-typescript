import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { CrmUsersService } from '../../../src/services/crmUsers/CrmUsers';

describe('test CrmUsersService object', () => {
  it('should be an object', () => {
    expect(typeof CrmUsersService).toBe('function');
  });
});

describe('test CrmUsers', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getUsers', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/users?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmUsers
        .getUsers('ipsum', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/users?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmUsers.getUsers()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/users?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmUsers.getUsers('deserunt', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getUser', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/users/1336326573?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmUsers
        .getUser('1336326573', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/users/6965921136?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmUsers.getUser()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/users/6046589593?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmUsers.getUser('6046589593', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
