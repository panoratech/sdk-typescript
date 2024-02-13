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
        .getAttachments('repellendus', { remoteData: true })
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
        async () => await sdk.ticketingAttachments.getAttachments('omnis', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .addAttachment({}, 'eligendi', { remoteData: true })
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
          await sdk.ticketingAttachments.addAttachment({}, 'assumenda', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/6242209461?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .getAttachment('6242209461', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/6087093697?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingAttachments.getAttachment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/5070565643?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.getAttachment('5070565643', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test downloadAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/9643963642/download?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .downloadAttachment('9643963642', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/6307477663/download?remote_data=true')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.ticketingAttachments.downloadAttachment(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/1664270619/download?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.downloadAttachment('1664270619', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addAttachments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .addAttachments({}, 'maiores', { remoteData: true })
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
        async () => await sdk.ticketingAttachments.addAttachments({}, 'vero', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
