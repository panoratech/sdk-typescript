import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { CrmTasksService } from '../../../src/services/crmTasks/CrmTasks';

describe('test CrmTasksService object', () => {
  it('should be an object', () => {
    expect(typeof CrmTasksService).toBe('function');
  });
});

describe('test CrmTasks', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getTasks', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .getTasks('laboriosam', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.getTasks()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmTasks.getTasks('reiciendis', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .addTask({}, 'voluptates', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.addTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmTasks.addTask({}, 'officia', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=1466987372')
        .reply(200, { data: {} });
      return sdk.crmTasks.updateTask('1466987372').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=4023041130')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.updateTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=8089194210')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmTasks.updateTask('8089194210')).rejects.toThrow();
    });
  });

  describe('test getTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/2514631940?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .getTask('2514631940', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/5582420095?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.getTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/5372708456?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmTasks.getTask('5372708456', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTasks', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .addTasks({}, 'harum', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks/batch?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.addTasks()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks/batch?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmTasks.addTasks({}, 'fugit', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
