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
        .getTickets('corrupti', { remoteData: true })
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
        async () => await sdk.ticketingTickets.getTickets('molestias', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .addTicket({}, 'labore', { remoteData: true })
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
        async () => await sdk.ticketingTickets.addTicket({}, 'illum', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=8814056601')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .updateTicket('8814056601')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=2437166568')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.updateTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=4039150539')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.updateTicket('4039150539'),
      ).rejects.toThrow();
    });
  });

  describe('test getTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/7132724783?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .getTicket('7132724783', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/5779590750?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.getTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/6005225330?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.getTicket('6005225330', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .addTickets({}, 'eligendi', { remoteData: true })
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
        async () => await sdk.ticketingTickets.addTickets({}, 'laboriosam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
