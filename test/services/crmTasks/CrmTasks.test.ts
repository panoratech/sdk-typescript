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
        .getTasks('provident', { remoteData: true })
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
        async () => await sdk.crmTasks.getTasks('architecto', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .addTask({}, 'perspiciatis', { remoteData: true })
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
        async () => await sdk.crmTasks.addTask({}, 'recusandae', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=4915337907')
        .reply(200, { data: {} });
      return sdk.crmTasks.updateTask('4915337907').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=6521486264')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.updateTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=1460721645')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmTasks.updateTask('1460721645')).rejects.toThrow();
    });
  });

  describe('test getTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/1866680520?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .getTask('1866680520', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/5624187967?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.getTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/5981718995?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmTasks.getTask('5981718995', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTasks', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .addTasks({}, 'sed', { remoteData: true })
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
        async () => await sdk.crmTasks.addTasks({}, 'dolorum', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
