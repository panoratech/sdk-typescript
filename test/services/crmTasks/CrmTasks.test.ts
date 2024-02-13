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
        .getTasks('asperiores', { remoteData: true })
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
        async () => await sdk.crmTasks.getTasks('eius', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .addTask({}, 'hic', { remoteData: true })
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
        async () => await sdk.crmTasks.addTask({}, 'asperiores', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=6585063850')
        .reply(200, { data: {} });
      return sdk.crmTasks.updateTask('6585063850').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=7407354109')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.updateTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=8583287247')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmTasks.updateTask('8583287247')).rejects.toThrow();
    });
  });

  describe('test getTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/1002207025?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .getTask('1002207025', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/2021882941?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.getTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/4446508248?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmTasks.getTask('4446508248', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTasks', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .addTasks({}, 'officia', { remoteData: true })
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
        async () => await sdk.crmTasks.addTasks({}, 'eius', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
