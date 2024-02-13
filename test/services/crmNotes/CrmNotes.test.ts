import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { CrmNotesService } from '../../../src/services/crmNotes/CrmNotes';

describe('test CrmNotesService object', () => {
  it('should be an object', () => {
    expect(typeof CrmNotesService).toBe('function');
  });
});

describe('test CrmNotes', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getNotes', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/notes?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmNotes
        .getNotes('sed', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/notes?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmNotes.getNotes()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/notes?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmNotes.getNotes('maiores', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addNote', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/notes?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmNotes
        .addNote({}, 'sunt', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/notes?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmNotes.addNote()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/notes?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmNotes.addNote({}, 'id', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getNote', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/notes/9638739010?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmNotes
        .getNote('9638739010', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/notes/4067716572?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmNotes.getNote()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/notes/8445399745?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmNotes.getNote('8445399745', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addNotes', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/notes/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmNotes
        .addNotes({}, 'odio', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/notes/batch?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmNotes.addNotes()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/notes/batch?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmNotes.addNotes({}, 'consequuntur', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
