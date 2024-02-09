import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { HealthService } from '../../../src/services/health/Health';

describe('test HealthService object', () => {
  it('should be an object', () => {
    expect(typeof HealthService).toBe('function');
  });
});

describe('test Health', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getHealth', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev').get('/health').reply(200, { data: {} });
      return sdk.health.getHealth().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
