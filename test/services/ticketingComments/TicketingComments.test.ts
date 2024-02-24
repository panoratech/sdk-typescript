import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { TicketingCommentsService } from '../../../src/services/ticketingComments/TicketingComments';

describe('test TicketingCommentsService object', () => {
  it('should be an object', () => {
    expect(typeof TicketingCommentsService).toBe('function');
  });
});

describe('test TicketingComments', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getComments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .getComments('optio', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComments.getComments()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComments.getComments('amet', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .addComment({}, 'modi', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComments.addComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComments.addComment({}, 'dicta', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/4366283011?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .getComment('4366283011', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/2361362106?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComments.getComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/7321851701?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComments.getComment('7321851701', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .addComments({}, 'provident', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments/batch?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComments.addComments()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments/batch?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComments.addComments({}, 'odit', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
