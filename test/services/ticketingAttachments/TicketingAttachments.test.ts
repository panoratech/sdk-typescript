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
        .getAttachments('alias', { remoteData: true })
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
        async () => await sdk.ticketingAttachments.getAttachments('eum', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .addAttachment({}, 'ab', { remoteData: true })
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
        async () => await sdk.ticketingAttachments.addAttachment({}, 'sit', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/3864229231?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .getAttachment('3864229231', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/3941288870?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingAttachments.getAttachment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/4743373310?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.getAttachment('4743373310', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test downloadAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/9569530921/download?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .downloadAttachment('9569530921', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/2595596082/download?remote_data=true')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.ticketingAttachments.downloadAttachment(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/9374399442/download?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.downloadAttachment('9374399442', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addAttachments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .addAttachments({}, 'porro', { remoteData: true })
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
          await sdk.ticketingAttachments.addAttachments({}, 'earum', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
