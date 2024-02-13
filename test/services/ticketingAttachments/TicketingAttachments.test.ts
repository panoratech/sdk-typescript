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
        .getAttachments('praesentium', { remoteData: true })
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
        async () =>
          await sdk.ticketingAttachments.getAttachments('distinctio', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .addAttachment({}, 'ducimus', { remoteData: true })
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
          await sdk.ticketingAttachments.addAttachment({}, 'dolore', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/4794205631?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .getAttachment('4794205631', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/6782453206?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingAttachments.getAttachment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/5388244006?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.getAttachment('5388244006', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test downloadAttachment', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/2766733197/download?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .downloadAttachment('2766733197', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/6997451569/download?remote_data=true')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.ticketingAttachments.downloadAttachment(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/ticketing/attachments/8193437028/download?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingAttachments.downloadAttachment('8193437028', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addAttachments', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/ticketing/attachments/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingAttachments
        .addAttachments({}, 'at', { remoteData: true })
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
        async () => await sdk.ticketingAttachments.addAttachments({}, 'ad', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
