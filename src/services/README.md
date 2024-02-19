# PanoraSDK Services
A list of all services and services methods.
- Services

    - [Main](#main)

    - [Health](#health)

    - [Protected](#protected)

    - [Auth](#auth)

    - [Connections](#connections)

    - [Webhook](#webhook)

    - [LinkedUsers](#linkedusers)

    - [Organisations](#organisations)

    - [Projects](#projects)

    - [FieldMapping](#fieldmapping)

    - [Events](#events)

    - [MagicLink](#magiclink)

    - [Passthrough](#passthrough)

    - [CrmContacts](#crmcontacts)

    - [CrmDeals](#crmdeals)

    - [CrmNotes](#crmnotes)

    - [CrmCompanies](#crmcompanies)

    - [CrmEngagements](#crmengagements)

    - [CrmStages](#crmstages)

    - [CrmTasks](#crmtasks)

    - [CrmUsers](#crmusers)

    - [TicketingTickets](#ticketingtickets)

    - [TicketingComments](#ticketingcomments)

    - [TicketingUsers](#ticketingusers)

    - [TicketingAttachments](#ticketingattachments)

    - [TicketingContacts](#ticketingcontacts)

    - [TicketingAccounts](#ticketingaccounts)

    - [TicketingTags](#ticketingtags)

    - [TicketingTeams](#ticketingteams)
- [All Methods](#all-methods)


## Main

| Method    | Description|
| :-------- | :----------|
| [getHello](#gethello) |  |


## Health

| Method    | Description|
| :-------- | :----------|
| [getHealth](#gethealth) |  |


## Protected

| Method    | Description|
| :-------- | :----------|
| [getHelloProtected](#gethelloprotected) |  |


## Auth

| Method    | Description|
| :-------- | :----------|
| [signUp](#signup) | Register |
| [signIn](#signin) | Log In |
| [getUsers](#getusers) | Get users |
| [getApiKeys](#getapikeys) | Retrieve API Keys |
| [generateApiKey](#generateapikey) | Create API Key |


## Connections

| Method    | Description|
| :-------- | :----------|
| [handleOAuthCallback](#handleoauthcallback) | Capture oAuth callback |
| [getConnections](#getconnections) | List Connections |


## Webhook

| Method    | Description|
| :-------- | :----------|
| [createWebhookMetadata](#createwebhookmetadata) | Add webhook metadata |
| [getWebhooksMetadata](#getwebhooksmetadata) | Retrieve webhooks metadata  |
| [updateWebhookStatus](#updatewebhookstatus) | Update webhook status |


## LinkedUsers

| Method    | Description|
| :-------- | :----------|
| [addLinkedUser](#addlinkeduser) | Add Linked User |
| [getLinkedUsers](#getlinkedusers) | Retrieve Linked Users |
| [getLinkedUser](#getlinkeduser) | Retrieve a Linked User |


## Organisations

| Method    | Description|
| :-------- | :----------|
| [getOrganisations](#getorganisations) | Retrieve Organisations |
| [createOrganisation](#createorganisation) | Create an Organisation |


## Projects

| Method    | Description|
| :-------- | :----------|
| [getProjects](#getprojects) | Retrieve projects |
| [createProject](#createproject) | Create a project |


## FieldMapping

| Method    | Description|
| :-------- | :----------|
| [getFieldMappingsEntities](#getfieldmappingsentities) | Retrieve field mapping entities |
| [getFieldMappings](#getfieldmappings) | Retrieve field mappings |
| [getFieldMappingValues](#getfieldmappingvalues) | Retrieve field mappings values |
| [defineTargetField](#definetargetfield) | Define target Field |
| [mapField](#mapfield) | Map Custom Field |
| [getCustomProviderProperties](#getcustomproviderproperties) | Retrieve Custom Properties |


## Events

| Method    | Description|
| :-------- | :----------|
| [getEvents](#getevents) | Retrieve Events |
| [getEventsCount](#geteventscount) | Retrieve Events Count |


## MagicLink

| Method    | Description|
| :-------- | :----------|
| [createMagicLink](#createmagiclink) | Create a Magic Link |
| [getMagicLinks](#getmagiclinks) | Retrieve Magic Links |
| [getMagicLink](#getmagiclink) | Retrieve a Magic Link |


## Passthrough

| Method    | Description|
| :-------- | :----------|
| [passthroughRequest](#passthroughrequest) | Make a passthrough request |


## CrmContacts

| Method    | Description|
| :-------- | :----------|
| [addContact](#addcontact) | Create CRM Contact |
| [getContacts](#getcontacts) | List a batch of CRM Contacts |
| [updateContact](#updatecontact) | Update a CRM Contact |
| [getContact](#getcontact) | Retrieve a CRM Contact |
| [addContacts](#addcontacts) | Add a batch of CRM Contacts |


## CrmDeals

| Method    | Description|
| :-------- | :----------|
| [addDeal](#adddeal) | Create a Deal |
| [getDeals](#getdeals) | List a batch of Deals |
| [getDeal](#getdeal) | Retrieve a Deal |
| [updateDeal](#updatedeal) | Update a Deal |
| [addDeals](#adddeals) | Add a batch of Deals |


## CrmNotes

| Method    | Description|
| :-------- | :----------|
| [addNote](#addnote) | Create a Note |
| [getNotes](#getnotes) | List a batch of Notes |
| [getNote](#getnote) | Retrieve a Note |
| [addNotes](#addnotes) | Add a batch of Notes |


## CrmCompanies

| Method    | Description|
| :-------- | :----------|
| [addCompany](#addcompany) | Create a Company |
| [getCompanies](#getcompanies) | List a batch of Companies |
| [updateCompany](#updatecompany) | Update a Company |
| [getCompany](#getcompany) | Retrieve a Company |
| [addCompanies](#addcompanies) | Add a batch of Companies |


## CrmEngagements

| Method    | Description|
| :-------- | :----------|
| [addEngagement](#addengagement) | Create a Engagement |
| [getEngagements](#getengagements) | List a batch of Engagements |
| [updateEngagement](#updateengagement) | Update a Engagement |
| [getEngagement](#getengagement) | Retrieve a Engagement |
| [addEngagements](#addengagements) | Add a batch of Engagements |


## CrmStages

| Method    | Description|
| :-------- | :----------|
| [getStages](#getstages) | List a batch of Stages |
| [getStage](#getstage) | Retrieve a Stage |


## CrmTasks

| Method    | Description|
| :-------- | :----------|
| [addTask](#addtask) | Create a Task |
| [getTasks](#gettasks) | List a batch of Tasks |
| [updateTask](#updatetask) | Update a Task |
| [getTask](#gettask) | Retrieve a Task |
| [addTasks](#addtasks) | Add a batch of Tasks |


## CrmUsers

| Method    | Description|
| :-------- | :----------|
| [getUsers](#getusers) | List a batch of Users |
| [getUser](#getuser) | Retrieve a User |


## TicketingTickets

| Method    | Description|
| :-------- | :----------|
| [addTicket](#addticket) | Create a Ticket |
| [getTickets](#gettickets) | List a batch of Tickets |
| [updateTicket](#updateticket) | Update a Ticket |
| [getTicket](#getticket) | Retrieve a Ticket |
| [addTickets](#addtickets) | Add a batch of Tickets |


## TicketingComments

| Method    | Description|
| :-------- | :----------|
| [addComment](#addcomment) | Create a Comment |
| [getComments](#getcomments) | List a batch of Comments |
| [getComment](#getcomment) | Retrieve a Comment |
| [addComments](#addcomments) | Add a batch of Comments |


## TicketingUsers

| Method    | Description|
| :-------- | :----------|
| [getUsers](#getusers) | List a batch of Users |
| [getUser](#getuser) | Retrieve a User |


## TicketingAttachments

| Method    | Description|
| :-------- | :----------|
| [addAttachment](#addattachment) | Create a Attachment |
| [getAttachments](#getattachments) | List a batch of Attachments |
| [getAttachment](#getattachment) | Retrieve a Attachment |
| [downloadAttachment](#downloadattachment) | Download a Attachment |
| [addAttachments](#addattachments) | Add a batch of Attachments |


## TicketingContacts

| Method    | Description|
| :-------- | :----------|
| [getContacts](#getcontacts) | List a batch of Contacts |
| [getContact](#getcontact) | Retrieve a Contact |


## TicketingAccounts

| Method    | Description|
| :-------- | :----------|
| [getAccounts](#getaccounts) | List a batch of Accounts |
| [getAccount](#getaccount) | Retrieve an Account |


## TicketingTags

| Method    | Description|
| :-------- | :----------|
| [getTags](#gettags) | List a batch of Tags |
| [getTag](#gettag) | Retrieve a Tag |


## TicketingTeams

| Method    | Description|
| :-------- | :----------|
| [getTeams](#getteams) | List a batch of Teams |
| [getTeam](#getteam) | Retrieve a Team |




## All Methods


### **getHello**

- HTTP Method: GET
- Endpoint: /




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.main.getHello();
  console.log(result);
})();

```


### **getHealth**

- HTTP Method: GET
- Endpoint: /health




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.health.getHealth();
  console.log(result);
})();

```


### **getHelloProtected**

- HTTP Method: GET
- Endpoint: /protected




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.protected.getHelloProtected();
  console.log(result);
})();

```


### **signUp**
Register
- HTTP Method: POST
- Endpoint: /auth/register

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    email: 'email',
    first_name: 'first_name',
    id_organisation: 'id_organisation',
    last_name: 'last_name',
    password_hash: 'password_hash',
  };
  const result = await sdk.auth.signUp(input);
  console.log(result);
})();

```

### **signIn**
Log In
- HTTP Method: POST
- Endpoint: /auth/login

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { email: 'email', id_user: 'id_user', password_hash: 'password_hash' };
  const result = await sdk.auth.signIn(input);
  console.log(result);
})();

```

### **getUsers**
Get users
- HTTP Method: GET
- Endpoint: /auth/users




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.auth.getUsers();
  console.log(result);
})();

```

### **getApiKeys**
Retrieve API Keys
- HTTP Method: GET
- Endpoint: /auth/api-keys




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.auth.getApiKeys();
  console.log(result);
})();

```

### **generateApiKey**
Create API Key
- HTTP Method: POST
- Endpoint: /auth/generate-apikey

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { keyName: 'keyName', projectId: 'projectId', userId: 'userId' };
  const result = await sdk.auth.generateApiKey(input);
  console.log(result);
})();

```


### **handleOAuthCallback**
Capture oAuth callback
- HTTP Method: GET
- Endpoint: /connections/oauth/callback

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| state | string |  |
| code | string |  |
| location | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.connections.handleOAuthCallback('state', 'code', 'location');
  console.log(result);
})();

```

### **getConnections**
List Connections
- HTTP Method: GET
- Endpoint: /connections




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.connections.getConnections();
  console.log(result);
})();

```


### **createWebhookMetadata**
Add webhook metadata
- HTTP Method: POST
- Endpoint: /webhook

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    description: 'description',
    id_project: 'id_project',
    scope: ['est aute id sed ex', 'velit aute'],
    url: 'url',
  };
  const result = await sdk.webhook.createWebhookMetadata(input);
  console.log(result);
})();

```

### **getWebhooksMetadata**
Retrieve webhooks metadata 
- HTTP Method: GET
- Endpoint: /webhook




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.webhook.getWebhooksMetadata();
  console.log(result);
})();

```

### **updateWebhookStatus**
Update webhook status
- HTTP Method: PUT
- Endpoint: /webhook/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.webhook.updateWebhookStatus('id');
  console.log(result);
})();

```


### **addLinkedUser**
Add Linked User
- HTTP Method: POST
- Endpoint: /linked-users/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    alias: 'alias',
    id_project: 'id_project',
    linked_user_origin_id: 'linked_user_origin_id',
  };
  const result = await sdk.linkedUsers.addLinkedUser(input);
  console.log(result);
})();

```

### **getLinkedUsers**
Retrieve Linked Users
- HTTP Method: GET
- Endpoint: /linked-users




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.linkedUsers.getLinkedUsers();
  console.log(result);
})();

```

### **getLinkedUser**
Retrieve a Linked User
- HTTP Method: GET
- Endpoint: /linked-users/single

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| originId | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.linkedUsers.getLinkedUser('originId');
  console.log(result);
})();

```


### **getOrganisations**
Retrieve Organisations
- HTTP Method: GET
- Endpoint: /organisations




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.organisations.getOrganisations();
  console.log(result);
})();

```

### **createOrganisation**
Create an Organisation
- HTTP Method: POST
- Endpoint: /organisations/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { name: 'name', stripe_customer_id: 'stripe_customer_id' };
  const result = await sdk.organisations.createOrganisation(input);
  console.log(result);
})();

```


### **getProjects**
Retrieve projects
- HTTP Method: GET
- Endpoint: /projects




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projects.getProjects();
  console.log(result);
})();

```

### **createProject**
Create a project
- HTTP Method: POST
- Endpoint: /projects/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { id_organization: 'id_organization', name: 'name' };
  const result = await sdk.projects.createProject(input);
  console.log(result);
})();

```


### **getFieldMappingsEntities**
Retrieve field mapping entities
- HTTP Method: GET
- Endpoint: /field-mapping/entities




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getFieldMappingsEntities();
  console.log(result);
})();

```

### **getFieldMappings**
Retrieve field mappings
- HTTP Method: GET
- Endpoint: /field-mapping/attribute




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getFieldMappings();
  console.log(result);
})();

```

### **getFieldMappingValues**
Retrieve field mappings values
- HTTP Method: GET
- Endpoint: /field-mapping/value




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getFieldMappingValues();
  console.log(result);
})();

```

### **defineTargetField**
Define target Field
- HTTP Method: POST
- Endpoint: /field-mapping/define

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    data_type: 'data_type',
    description: 'description',
    name: 'name',
    object_type_owner: 'object_type_owner',
  };
  const result = await sdk.fieldMapping.defineTargetField(input);
  console.log(result);
})();

```

### **mapField**
Map Custom Field
- HTTP Method: POST
- Endpoint: /field-mapping/map

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    attributeId: 'attributeId',
    linked_user_id: 'linked_user_id',
    source_custom_field_id: 'source_custom_field_id',
    source_provider: 'source_provider',
  };
  const result = await sdk.fieldMapping.mapField(input);
  console.log(result);
})();

```

### **getCustomProviderProperties**
Retrieve Custom Properties
- HTTP Method: GET
- Endpoint: /field-mapping/properties

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| linkedUserId | string |  |
| providerId | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getCustomProviderProperties('linkedUserId', 'providerId');
  console.log(result);
})();

```


### **getEvents**
Retrieve Events
- HTTP Method: GET
- Endpoint: /events


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number |  |
| pageSize | number |  |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.events.getEvents({ page: 1, pageSize: 10 });
  console.log(result);
})();

```

### **getEventsCount**
Retrieve Events Count
- HTTP Method: GET
- Endpoint: /events/count




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.events.getEventsCount();
  console.log(result);
})();

```


### **createMagicLink**
Create a Magic Link
- HTTP Method: POST
- Endpoint: /magic-link/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    alias: 'alias',
    email: 'email',
    id_project: 'id_project',
    linked_user_origin_id: 'linked_user_origin_id',
  };
  const result = await sdk.magicLink.createMagicLink(input);
  console.log(result);
})();

```

### **getMagicLinks**
Retrieve Magic Links
- HTTP Method: GET
- Endpoint: /magic-link




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.magicLink.getMagicLinks();
  console.log(result);
})();

```

### **getMagicLink**
Retrieve a Magic Link
- HTTP Method: GET
- Endpoint: /magic-link/single

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.magicLink.getMagicLink('id');
  console.log(result);
})();

```


### **passthroughRequest**
Make a passthrough request
- HTTP Method: POST
- Endpoint: /passthrough

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integrationId | string |  |
| linkedUserId | string |  |
| input | object | Request body. |



**Return Type**

PassThroughResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { data: {}, headers_: {}, method: 'GET', path: 'path' };
  const result = await sdk.passthrough.passthroughRequest(input, 'integrationId', 'linkedUserId');
  console.log(result);
})();

```


### **addContact**
Create CRM Contact
- HTTP Method: POST
- Endpoint: /crm/contacts

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original CRM software. |


**Return Type**

AddContactResponse
UnifiedContactOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    addresses: [],
    email_addresses: [],
    field_mappings: {},
    first_name: 'first_name',
    last_name: 'last_name',
    phone_numbers: [],
    user_id: 'user_id',
  };
  const result = await sdk.crmContacts.addContact(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getContacts**
List a batch of CRM Contacts
- HTTP Method: GET
- Endpoint: /crm/contacts

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original CRM software. |


**Return Type**

GetContactsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmContacts.getContacts('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **updateContact**
Update a CRM Contact
- HTTP Method: PATCH
- Endpoint: /crm/contacts

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

UnifiedContactOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmContacts.updateContact('id');
  console.log(result);
})();

```

### **getContact**
Retrieve a CRM Contact
- HTTP Method: GET
- Endpoint: /crm/contacts/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the `contact` you want to retrive. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original CRM software. |


**Return Type**

GetContactResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmContacts.getContact('id', { remoteData: true });
  console.log(result);
})();

```

### **addContacts**
Add a batch of CRM Contacts
- HTTP Method: POST
- Endpoint: /crm/contacts/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original CRM software. |


**Return Type**

AddContactsResponse
CrmContactsAddContactsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.crmContacts.addContacts(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```


### **addDeal**
Create a Deal
- HTTP Method: POST
- Endpoint: /crm/deals

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

AddDealResponse
UnifiedDealOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { field_mappings: {} };
  const result = await sdk.crmDeals.addDeal(input, 'x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **getDeals**
List a batch of Deals
- HTTP Method: GET
- Endpoint: /crm/deals

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetDealsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmDeals.getDeals('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **getDeal**
Retrieve a Deal
- HTTP Method: GET
- Endpoint: /crm/deals/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the deal you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetDealResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmDeals.getDeal('id', { remoteData: true });
  console.log(result);
})();

```

### **updateDeal**
Update a Deal
- HTTP Method: PATCH
- Endpoint: /crm/deals/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

UpdateDealResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmDeals.updateDeal('id');
  console.log(result);
})();

```

### **addDeals**
Add a batch of Deals
- HTTP Method: POST
- Endpoint: /crm/deals/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

AddDealsResponse
CrmDealsAddDealsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.crmDeals.addDeals(input, 'x-connection-token', { remoteData: true });
  console.log(result);
})();

```


### **addNote**
Create a Note
- HTTP Method: POST
- Endpoint: /crm/notes

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

AddNoteResponse
UnifiedNoteOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { field_mappings: {} };
  const result = await sdk.crmNotes.addNote(input, 'x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **getNotes**
List a batch of Notes
- HTTP Method: GET
- Endpoint: /crm/notes

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetNotesResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmNotes.getNotes('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **getNote**
Retrieve a Note
- HTTP Method: GET
- Endpoint: /crm/notes/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the note you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetNoteResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmNotes.getNote('id', { remoteData: true });
  console.log(result);
})();

```

### **addNotes**
Add a batch of Notes
- HTTP Method: POST
- Endpoint: /crm/notes/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

AddNotesResponse
CrmNotesAddNotesResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.crmNotes.addNotes(input, 'x-connection-token', { remoteData: true });
  console.log(result);
})();

```


### **addCompany**
Create a Company
- HTTP Method: POST
- Endpoint: /crm/companies

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

AddCompanyResponse
UnifiedCompanyOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { field_mappings: {} };
  const result = await sdk.crmCompanies.addCompany(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getCompanies**
List a batch of Companies
- HTTP Method: GET
- Endpoint: /crm/companies

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetCompaniesResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmCompanies.getCompanies('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **updateCompany**
Update a Company
- HTTP Method: PATCH
- Endpoint: /crm/companies

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

UpdateCompanyResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmCompanies.updateCompany('id');
  console.log(result);
})();

```

### **getCompany**
Retrieve a Company
- HTTP Method: GET
- Endpoint: /crm/companies/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the company you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetCompanyResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmCompanies.getCompany('id', { remoteData: true });
  console.log(result);
})();

```

### **addCompanies**
Add a batch of Companies
- HTTP Method: POST
- Endpoint: /crm/companies/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

AddCompaniesResponse
CrmCompaniesAddCompaniesResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.crmCompanies.addCompanies(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```


### **addEngagement**
Create a Engagement
- HTTP Method: POST
- Endpoint: /crm/engagements

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

AddEngagementResponse
UnifiedEngagementOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { field_mappings: {} };
  const result = await sdk.crmEngagements.addEngagement(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getEngagements**
List a batch of Engagements
- HTTP Method: GET
- Endpoint: /crm/engagements

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetEngagementsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmEngagements.getEngagements('x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **updateEngagement**
Update a Engagement
- HTTP Method: PATCH
- Endpoint: /crm/engagements

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

UpdateEngagementResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmEngagements.updateEngagement('id');
  console.log(result);
})();

```

### **getEngagement**
Retrieve a Engagement
- HTTP Method: GET
- Endpoint: /crm/engagements/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the engagement you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetEngagementResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmEngagements.getEngagement('id', { remoteData: true });
  console.log(result);
})();

```

### **addEngagements**
Add a batch of Engagements
- HTTP Method: POST
- Endpoint: /crm/engagements/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

AddEngagementsResponse
CrmEngagementsAddEngagementsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.crmEngagements.addEngagements(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```


### **getStages**
List a batch of Stages
- HTTP Method: GET
- Endpoint: /crm/stages

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetStagesResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmStages.getStages('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **getStage**
Retrieve a Stage
- HTTP Method: GET
- Endpoint: /crm/stages/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the stage you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetStageResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmStages.getStage('id', { remoteData: true });
  console.log(result);
})();

```


### **addTask**
Create a Task
- HTTP Method: POST
- Endpoint: /crm/tasks

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

AddTaskResponse
UnifiedTaskOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { field_mappings: {} };
  const result = await sdk.crmTasks.addTask(input, 'x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **getTasks**
List a batch of Tasks
- HTTP Method: GET
- Endpoint: /crm/tasks

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetTasksResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmTasks.getTasks('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **updateTask**
Update a Task
- HTTP Method: PATCH
- Endpoint: /crm/tasks

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

UpdateTaskResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmTasks.updateTask('id');
  console.log(result);
})();

```

### **getTask**
Retrieve a Task
- HTTP Method: GET
- Endpoint: /crm/tasks/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the task you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetTaskResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmTasks.getTask('id', { remoteData: true });
  console.log(result);
})();

```

### **addTasks**
Add a batch of Tasks
- HTTP Method: POST
- Endpoint: /crm/tasks/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

AddTasksResponse
CrmTasksAddTasksResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.crmTasks.addTasks(input, 'x-connection-token', { remoteData: true });
  console.log(result);
})();

```


### **getUsers**
List a batch of Users
- HTTP Method: GET
- Endpoint: /crm/users

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetUsersResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmUsers.getUsers('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **getUser**
Retrieve a User
- HTTP Method: GET
- Endpoint: /crm/users/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the user you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Crm software. |


**Return Type**

GetUserResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmUsers.getUser('id', { remoteData: true });
  console.log(result);
})();

```


### **addTicket**
Create a Ticket
- HTTP Method: POST
- Endpoint: /ticketing/tickets

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

AddTicketResponse
UnifiedTicketOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    account_id: 'account_id',
    assigned_to: ['officia', 'aliqua occaecat non'],
    comment: ['enim dolor nisi do sit', 'laborum minim'],
    completed_at: '1967-05-22T21:46:39.0Z',
    contact_id: 'contact_id',
    description: ['cillum ut dolore labore est', 'dolor consequat eiusmod tempor culpa'],
    due_date: '1901-11-11T03:10:16.0Z',
    field_mappings: {},
    name: 'name',
    parent_ticket: 'parent_ticket',
    priority: 'priority',
    status: 'status',
    tags: ['nostrud quis irure officia', 'ea sed'],
    type_: 'type',
  };
  const result = await sdk.ticketingTickets.addTicket(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getTickets**
List a batch of Tickets
- HTTP Method: GET
- Endpoint: /ticketing/tickets

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetTicketsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingTickets.getTickets('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **updateTicket**
Update a Ticket
- HTTP Method: PATCH
- Endpoint: /ticketing/tickets

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

UnifiedTicketOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingTickets.updateTicket('id');
  console.log(result);
})();

```

### **getTicket**
Retrieve a Ticket
- HTTP Method: GET
- Endpoint: /ticketing/tickets/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the `ticket` you want to retrive. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetTicketResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingTickets.getTicket('id', { remoteData: true });
  console.log(result);
})();

```

### **addTickets**
Add a batch of Tickets
- HTTP Method: POST
- Endpoint: /ticketing/tickets/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

AddTicketsResponse
TicketingTicketsAddTicketsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.ticketingTickets.addTickets(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```


### **addComment**
Create a Comment
- HTTP Method: POST
- Endpoint: /ticketing/comments

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

AddCommentResponse
UnifiedCommentOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    attachments: ['eu ut consectetur aute', 'non adipisicing Lorem occaecat'],
    body: 'body',
    contact_id: 'contact_id',
    creator_type: 'creator_type',
    html_body: 'html_body',
    is_private: true,
    ticket_id: 'ticket_id',
    user_id: 'user_id',
  };
  const result = await sdk.ticketingComments.addComment(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getComments**
List a batch of Comments
- HTTP Method: GET
- Endpoint: /ticketing/comments

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetCommentsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingComments.getComments('x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getComment**
Retrieve a Comment
- HTTP Method: GET
- Endpoint: /ticketing/comments/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the `comment` you want to retrive. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetCommentResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingComments.getComment('id', { remoteData: true });
  console.log(result);
})();

```

### **addComments**
Add a batch of Comments
- HTTP Method: POST
- Endpoint: /ticketing/comments/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

AddCommentsResponse
TicketingCommentsAddCommentsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.ticketingComments.addComments(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```


### **getUsers**
List a batch of Users
- HTTP Method: GET
- Endpoint: /ticketing/users

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetUsersResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingUsers.getUsers('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **getUser**
Retrieve a User
- HTTP Method: GET
- Endpoint: /ticketing/users/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the user you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetUserResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingUsers.getUser('id', { remoteData: true });
  console.log(result);
})();

```


### **addAttachment**
Create a Attachment
- HTTP Method: POST
- Endpoint: /ticketing/attachments

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

AddAttachmentResponse
UnifiedAttachmentOutput

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    field_mappings: {},
    file_name: 'file_name',
    file_url: 'file_url',
    uploader: 'uploader',
  };
  const result = await sdk.ticketingAttachments.addAttachment(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getAttachments**
List a batch of Attachments
- HTTP Method: GET
- Endpoint: /ticketing/attachments

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetAttachmentsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingAttachments.getAttachments('x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getAttachment**
Retrieve a Attachment
- HTTP Method: GET
- Endpoint: /ticketing/attachments/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the attachment you want to retrive. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetAttachmentResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingAttachments.getAttachment('id', { remoteData: true });
  console.log(result);
})();

```

### **downloadAttachment**
Download a Attachment
- HTTP Method: GET
- Endpoint: /ticketing/attachments/{id}/download

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the attachment you want to retrive. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

DownloadAttachmentResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingAttachments.downloadAttachment('id', { remoteData: true });
  console.log(result);
})();

```

### **addAttachments**
Add a batch of Attachments
- HTTP Method: POST
- Endpoint: /ticketing/attachments/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

AddAttachmentsResponse
TicketingAttachmentsAddAttachmentsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.ticketingAttachments.addAttachments(input, 'x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```


### **getContacts**
List a batch of Contacts
- HTTP Method: GET
- Endpoint: /ticketing/contacts

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetContactsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingContacts.getContacts('x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getContact**
Retrieve a Contact
- HTTP Method: GET
- Endpoint: /ticketing/contacts/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the contact you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetContactResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingContacts.getContact('id', { remoteData: true });
  console.log(result);
})();

```


### **getAccounts**
List a batch of Accounts
- HTTP Method: GET
- Endpoint: /ticketing/accounts

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetAccountsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingAccounts.getAccounts('x-connection-token', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getAccount**
Retrieve an Account
- HTTP Method: GET
- Endpoint: /ticketing/accounts/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the account you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetAccountResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingAccounts.getAccount('id', { remoteData: true });
  console.log(result);
})();

```


### **getTags**
List a batch of Tags
- HTTP Method: GET
- Endpoint: /ticketing/tags

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetTagsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingTags.getTags('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **getTag**
Retrieve a Tag
- HTTP Method: GET
- Endpoint: /ticketing/tags/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the tag you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetTagResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingTags.getTag('id', { remoteData: true });
  console.log(result);
})();

```


### **getTeams**
List a batch of Teams
- HTTP Method: GET
- Endpoint: /ticketing/teams

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| xConnectionToken | string | The connection token |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetTeamsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingTeams.getTeams('x-connection-token', { remoteData: true });
  console.log(result);
})();

```

### **getTeam**
Retrieve a Team
- HTTP Method: GET
- Endpoint: /ticketing/teams/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string | id of the team you want to retrieve. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean | Set to true to include data from the original Ticketing software. |


**Return Type**

GetTeamResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from 'panorasdk';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.ticketingTeams.getTeam('id', { remoteData: true });
  console.log(result);
})();

```




