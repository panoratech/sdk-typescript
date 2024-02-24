import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { TicketingTeamsService } from '../../../src/services/ticketingTeams/TicketingTeams';

describe('test TicketingTeamsService object', () => {
  it('should be an object', () => {
    expect(typeof TicketingTeamsService).toBe('function');
  });
});

describe('test TicketingTeams', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getTeams', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/teams?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTeams
        .getTeams('nostrum', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/teams?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTeams.getTeams()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/teams?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTeams.getTeams('tenetur', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getTeam', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/teams/9691931438?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTeams
        .getTeam('9691931438', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/teams/1459681470?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTeams.getTeam()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/teams/7025508299?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTeams.getTeam('7025508299', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
