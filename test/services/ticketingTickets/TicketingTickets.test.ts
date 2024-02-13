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
        .getTickets('voluptatibus', { remoteData: true })
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
        async () => await sdk.ticketingTickets.getTickets('voluptate', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .addTicket({}, 'ad', { remoteData: true })
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
        async () => await sdk.ticketingTickets.addTicket({}, 'aspernatur', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=2939914839')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .updateTicket('2939914839')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=2656913846')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.updateTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=3199786614')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.updateTicket('3199786614'),
      ).rejects.toThrow();
    });
  });

  describe('test getTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/3338433790?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .getTicket('3338433790', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/4473766427?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.getTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/3385554261?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.getTicket('3385554261', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .addTickets({}, 'qui', { remoteData: true })
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
        async () => await sdk.ticketingTickets.addTickets({}, 'ipsam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
