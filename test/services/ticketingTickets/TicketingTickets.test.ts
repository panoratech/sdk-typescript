import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { TicketingTicketsService } from '../../../src/services/ticketingTickets/TicketingTickets';

describe('test TicketingTicketsService object', () => {
  it('should be an object', () => {
    expect(typeof TicketingTicketsService).toBe('function');
  });
});

describe('test TicketingTickets', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .getTickets('fugiat', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.getTickets()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.getTickets('odio', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .addTicket({}, 'ut', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.addTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.addTicket({}, 'minus', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=9935265637')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .updateTicket('9935265637')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=5147775558')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.updateTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=8887274994')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.updateTicket('8887274994'),
      ).rejects.toThrow();
    });
  });

  describe('test getTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/7156919241?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .getTicket('7156919241', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/3876943732?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.getTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/8050043862?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.getTicket('8050043862', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .addTickets({}, 'officia', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets/batch?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.addTickets()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets/batch?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.addTickets({}, 'similique', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
