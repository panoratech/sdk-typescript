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
        .getComments('eveniet', { remoteData: true })
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
        async () => await sdk.ticketingComments.getComments('odit', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .addComment({}, 'voluptatem', { remoteData: true })
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
        async () => await sdk.ticketingComments.addComment({}, 'tempore', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/4668956154?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .getComment('4668956154', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/1729875966?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComments.getComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/3193261428?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComments.getComment('3193261428', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .addComments({}, 'explicabo', { remoteData: true })
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
        async () => await sdk.ticketingComments.addComments({}, 'vel', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
