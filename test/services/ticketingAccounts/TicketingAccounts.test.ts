import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { TicketingAccountsService } from '../../../src/services/ticketingAccounts/TicketingAccounts';

describe('test TicketingAccountsService object', () => {
  it('should be an object', () => {
    expect(typeof TicketingAccountsService).toBe('function');
  });
});

describe('test TicketingAccounts', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getAccounts', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/accounts?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAccounts
        .getAccounts('eveniet', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/accounts?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingAccounts.getAccounts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/accounts?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingAccounts.getAccounts('distinctio', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getAccount', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/accounts/2817285188?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAccounts
        .getAccount('2817285188', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/accounts/5677794326?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingAccounts.getAccount()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/accounts/7349572890?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingAccounts.getAccount('7349572890', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
