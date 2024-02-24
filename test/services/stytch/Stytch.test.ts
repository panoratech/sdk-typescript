import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { StytchService } from '../../../src/services/stytch/Stytch';

describe('test StytchService object', () => {
  it('should be an object', () => {
    expect(typeof StytchService).toBe('function');
  });
});

describe('test Stytch', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test stytchprotected', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev').get('/stytch').reply(200, { data: {} });
      return sdk.stytch.stytchprotected().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
