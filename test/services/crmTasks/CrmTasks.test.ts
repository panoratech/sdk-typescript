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
        .getTasks('neque', { remoteData: true })
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
        async () => await sdk.crmTasks.getTasks('omnis', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .addTask({}, 'saepe', { remoteData: true })
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
        async () => await sdk.crmTasks.addTask({}, 'natus', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=4200537946')
        .reply(200, { data: {} });
      return sdk.crmTasks.updateTask('4200537946').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=6835981998')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.updateTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .patch('/crm/tasks?id=9446400147')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmTasks.updateTask('9446400147')).rejects.toThrow();
    });
  });

  describe('test getTask', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/6099289592?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .getTask('6099289592', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/2590876566?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmTasks.getTask()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-dev.panora.dev')
        .get('/crm/tasks/5672760799?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmTasks.getTask('5672760799', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTasks', () => {
    test('test api call', () => {
      const scope = nock('https://api-dev.panora.dev')
        .post('/crm/tasks/batch?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmTasks
        .addTasks({}, 'maxime', { remoteData: true })
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
        async () => await sdk.crmTasks.addTasks({}, 'officia', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
