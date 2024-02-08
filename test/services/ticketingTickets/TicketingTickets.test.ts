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
        .getTickets('doloribus', { remoteData: true })
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
        async () => await sdk.ticketingTickets.getTickets('aspernatur', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .addTicket({}, 'laborum', { remoteData: true })
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
        async () => await sdk.ticketingTickets.addTicket({}, 'consequuntur', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=8673804724')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .updateTicket('8673804724')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=2841615476')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.updateTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=7132550412')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.updateTicket('7132550412'),
      ).rejects.toThrow();
    });
  });

  describe('test getTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/1290913639?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .getTicket('1290913639', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/6955454082?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.getTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/5351109070?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.getTicket('5351109070', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .addTickets({}, 'harum', { remoteData: true })
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
        async () => await sdk.ticketingTickets.addTickets({}, 'consectetur', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
