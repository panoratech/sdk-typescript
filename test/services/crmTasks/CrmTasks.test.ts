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
        .getTasks('minima', { remoteData: true })
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
        async () => await sdk.crmTasks.getTasks('in', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .addTask({}, 'nobis', { remoteData: true })
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
        async () => await sdk.crmTasks.addTask({}, 'dolore', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=3532718052')
        .reply(200, { data: {} });
      return sdk.crmTasks.updateTask('3532718052').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=3873000557')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.updateTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=7728249644')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmTasks.updateTask('7728249644')).rejects.toThrow();
    });
  });

  describe('test getTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/8999422083?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .getTask('8999422083', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/7120448495?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.getTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/7000726059?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmTasks.getTask('7000726059', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTasks', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .addTasks({}, 'quasi', { remoteData: true })
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
        async () => await sdk.crmTasks.addTasks({}, 'provident', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
