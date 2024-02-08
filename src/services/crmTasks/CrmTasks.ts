import BaseService from '../../BaseService';

import { GetTasksResponse } from './models/GetTasksResponse';
import { AddTaskResponse } from './models/AddTaskResponse';
import { UnifiedTaskOutput } from './models/UnifiedTaskOutput';
import { UpdateTaskResponse } from './models/UpdateTaskResponse';
import { UnifiedTaskInput } from './models/UnifiedTaskInput';
import { GetTaskResponse } from './models/GetTaskResponse';
import { AddTasksResponse } from './models/AddTasksResponse';
import { CrmTasksAddTasksResponse } from './models/CrmTasksAddTasksResponse';
import { AddTasksRequest } from './models/AddTasksRequest';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class CrmTasksService extends BaseService {
  /**
   * @summary List a batch of Tasks

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetTasksResponse>} - The promise with the result
   */
  async getTasks(
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetTasksResponse> {
    const { remoteData } = optionalParams;
    if (connectionToken === undefined) {
      throw new Error(
        'The following parameter is required: connectionToken, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = {};
    if (connectionToken !== undefined) {
      headers['connection_token'] = serializeHeader(false, connectionToken);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlEndpoint = '/crm/tasks';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as GetTasksResponse;
    return responseModel;
  }

  /**
   * @summary Create a Task
   * @description Create a task in any supported Crm software

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<AddTaskResponse|UnifiedTaskOutput>} - The promise with the result
   */
  async addTask(
    input: UnifiedTaskInput,
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddTaskResponse | UnifiedTaskOutput> {
    const { remoteData } = optionalParams;
    if (connectionToken === undefined) {
      throw new Error(
        'The following parameter is required: connectionToken, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (connectionToken !== undefined) {
      headers['connection_token'] = serializeHeader(false, connectionToken);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlEndpoint = '/crm/tasks';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as AddTaskResponse | UnifiedTaskOutput;
    return responseModel;
  }

  /**
   * @summary Update a Task

   * @param id Needed input variable
   * @returns {Promise<UpdateTaskResponse>} - The promise with the result
   */
  async updateTask(id: string): Promise<UpdateTaskResponse> {
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (id) {
      queryParams.push(serializeQuery('form', true, 'id', id));
    }
    const urlEndpoint = '/crm/tasks';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.patch(
      finalUrl,
      { id },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as UpdateTaskResponse;
    return responseModel;
  }

  /**
   * @summary Retrieve a Task
   * @description Retrieve a task from any connected Crm software

   * @param id id of the task you want to retrieve.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<GetTaskResponse>} - The promise with the result
   */
  async getTask(
    id: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<GetTaskResponse> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/crm/tasks/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false, id, undefined));
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as GetTaskResponse;
    return responseModel;
  }

  /**
   * @summary Add a batch of Tasks

   * @param connectionToken The connection token
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Crm software.
   * @returns {Promise<AddTasksResponse|CrmTasksAddTasksResponse>} - The promise with the result
   */
  async addTasks(
    input: AddTasksRequest,
    connectionToken: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<AddTasksResponse | CrmTasksAddTasksResponse> {
    const { remoteData } = optionalParams;
    if (connectionToken === undefined) {
      throw new Error(
        'The following parameter is required: connectionToken, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (connectionToken !== undefined) {
      headers['connection_token'] = serializeHeader(false, connectionToken);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remote_data', remoteData));
    }
    const urlEndpoint = '/crm/tasks/batch';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data as AddTasksResponse | CrmTasksAddTasksResponse;
    return responseModel;
  }
}
