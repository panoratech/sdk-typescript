import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { TicketingAttachmentsService } from '../../../src/services/ticketingAttachments/TicketingAttachments';

describe('test TicketingAttachmentsService object', () => {
  it('should be an object', () => {
    expect(typeof TicketingAttachmentsService).toBe('function');
  });
});

describe('test TicketingAttachments', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getAttachments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .getAttachments('odit', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingAttachments.getAttachments()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingAttachments.getAttachments('iste', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .addAttachment({}, 'quisquam', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingAttachments.addAttachment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.addAttachment({}, 'repudiandae', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/2525750804?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .getAttachment('2525750804', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/4584043886?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingAttachments.getAttachment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/1494154474?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.getAttachment('1494154474', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test downloadAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/2986421852/download?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .downloadAttachment('2986421852', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/9078199129/download?remote_data=true')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.ticketingAttachments.downloadAttachment(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/2320612468/download?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.downloadAttachment('2320612468', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addAttachments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .addAttachments({}, 'hic', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments/batch?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingAttachments.addAttachments()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments/batch?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.addAttachments({}, 'excepturi', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
