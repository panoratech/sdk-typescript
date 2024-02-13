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
        .getNotes('aliquid', { remoteData: true })
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
        async () => await sdk.crmNotes.getNotes('corrupti', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addNote', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/notes?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmNotes
        .addNote({}, 'occaecati', { remoteData: true })
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
        async () => await sdk.crmNotes.addNote({}, 'ipsum', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test getNote', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/notes/5766868405?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmNotes
        .getNote('5766868405', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/notes/1447905207?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmNotes.getNote()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/notes/1872236417?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmNotes.getNote('1872236417', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addNotes', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/notes/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmNotes
        .addNotes({}, 'quam', { remoteData: true })
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
        async () => await sdk.crmNotes.addNotes({}, 'omnis', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
