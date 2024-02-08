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
        .getAttachments('facere', { remoteData: true })
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
        async () => await sdk.ticketingAttachments.getAttachments('quam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .addAttachment({}, 'impedit', { remoteData: true })
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
          await sdk.ticketingAttachments.addAttachment({}, 'maxime', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/7468217055?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .getAttachment('7468217055', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/5138021860?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingAttachments.getAttachment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/9659090615?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.getAttachment('9659090615', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test downloadAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/6928117615/download?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .downloadAttachment('6928117615', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/7967613319/download?remote_data=true')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.ticketingAttachments.downloadAttachment(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/3062343444/download?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.downloadAttachment('3062343444', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addAttachments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .addAttachments({}, 'vitae', { remoteData: true })
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
        async () => await sdk.ticketingAttachments.addAttachments({}, 'quam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
