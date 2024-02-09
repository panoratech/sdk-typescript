import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { TicketingUsersService } from '../../../src/services/ticketingUsers/TicketingUsers';

describe('test TicketingUsersService object', () => {
  it('should be an object', () => {
    expect(typeof TicketingUsersService).toBe('function');
  });
});

describe('test TicketingUsers', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getUsers', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/users?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingUsers
        .getUsers('voluptatibus', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/users?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingUsers.getUsers()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/users?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingUsers.getUsers('impedit', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getUser', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/users/3986966941?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingUsers
        .getUser('3986966941', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/users/8914087909?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingUsers.getUser()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/users/7710606037?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingUsers.getUser('7710606037', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
