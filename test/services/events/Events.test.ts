import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { EventsService } from '../../../src/services/events/Events';

describe('test EventsService object', () => {
  it('should be an object', () => {
    expect(typeof EventsService).toBe('function');
  });
});

describe('test Events', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getEvents', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/events?page=1&pageSize=9')
        .reply(200, { data: {} });
      return sdk.events
        .getEvents({ page: 1, pageSize: 9 })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getEventsCount', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/events/count')
        .reply(200, { data: {} });
      return sdk.events.getEventsCount().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
