import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { TicketingContactsService } from '../../../src/services/ticketingContacts/TicketingContacts';

describe('test TicketingContactsService object', () => {
  it('should be an object', () => {
    expect(typeof TicketingContactsService).toBe('function');
  });
});

describe('test TicketingContacts', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/contacts?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingContacts
        .getContacts('omnis', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/contacts?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingContacts.getContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/contacts?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingContacts.getContacts('facere', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/contacts/2862224008?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingContacts
        .getContact('2862224008', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/contacts/3434482616?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingContacts.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/contacts/5426989753?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingContacts.getContact('5426989753', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
