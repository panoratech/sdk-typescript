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
        .getComments('neque', { remoteData: true })
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
        async () => await sdk.ticketingComments.getComments('repellendus', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .addComment({}, 'aliquid', { remoteData: true })
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
        async () => await sdk.ticketingComments.addComment({}, 'aperiam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/3256776629?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .getComment('3256776629', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/1392271122?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComments.getComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/comments/3323107023?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComments.getComment('3323107023', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/comments/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingComments
        .addComments({}, 'at', { remoteData: true })
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
        async () => await sdk.ticketingComments.addComments({}, 'quos', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
