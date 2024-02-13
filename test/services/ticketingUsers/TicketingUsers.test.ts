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
        .getUsers('perspiciatis', { remoteData: true })
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
        async () => await sdk.ticketingUsers.getUsers('repudiandae', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getUser', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/users/2543848330?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingUsers
        .getUser('2543848330', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/users/8538055982?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingUsers.getUser()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/users/3753412846?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingUsers.getUser('3753412846', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
