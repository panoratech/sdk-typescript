import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { TicketingTagsService } from '../../../src/services/ticketingTags/TicketingTags';

describe('test TicketingTagsService object', () => {
  it('should be an object', () => {
    expect(typeof TicketingTagsService).toBe('function');
  });
});

describe('test TicketingTags', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getTags', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tags?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTags
        .getTags('fugiat', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tags?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTags.getTags()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tags?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTags.getTags('atque', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getTag', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tags/3937747456?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTags
        .getTag('3937747456', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tags/1962540869?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTags.getTag()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tags/2175103905?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTags.getTag('2175103905', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
