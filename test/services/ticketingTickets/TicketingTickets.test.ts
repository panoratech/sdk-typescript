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
        .getTickets('sed', { remoteData: true })
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
        async () => await sdk.ticketingTickets.getTickets('asperiores', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .addTicket({}, 'est', { remoteData: true })
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
        async () => await sdk.ticketingTickets.addTicket({}, 'dicta', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=1559967350')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .updateTicket('1559967350')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=5868869396')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.updateTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/ticketing/tickets?id=5478867942')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.updateTicket('5478867942'),
      ).rejects.toThrow();
    });
  });

  describe('test getTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/2080840983?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .getTicket('2080840983', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/9871997954?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTickets.getTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/tickets/3159984372?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTickets.getTicket('3159984372', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/tickets/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTickets
        .addTickets({}, 'perferendis', { remoteData: true })
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
        async () => await sdk.ticketingTickets.addTickets({}, 'incidunt', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
