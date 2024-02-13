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
        .getComments('quos', { remoteData: true })
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
        async () => await sdk.ticketingComments.getComments('quaerat', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .addComment({}, 'dolore', { remoteData: true })
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
        async () => await sdk.ticketingComments.addComment({}, 'explicabo', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/2023574136?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .getComment('2023574136', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/7960528954?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComments.getComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/4519206761?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComments.getComment('4519206761', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .addComments({}, 'consectetur', { remoteData: true })
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
        async () => await sdk.ticketingComments.addComments({}, 'minima', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
