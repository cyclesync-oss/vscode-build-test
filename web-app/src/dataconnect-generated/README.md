# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMySymptomLogs*](#getmysymptomlogs)
  - [*GetMyNotes*](#getmynotes)
- [**Mutations**](#mutations)
  - [*CreateSymptomLog*](#createsymptomlog)
  - [*CreateNote*](#createnote)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMySymptomLogs
You can execute the `GetMySymptomLogs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMySymptomLogs(): QueryPromise<GetMySymptomLogsData, undefined>;

interface GetMySymptomLogsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMySymptomLogsData, undefined>;
}
export const getMySymptomLogsRef: GetMySymptomLogsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMySymptomLogs(dc: DataConnect): QueryPromise<GetMySymptomLogsData, undefined>;

interface GetMySymptomLogsRef {
  ...
  (dc: DataConnect): QueryRef<GetMySymptomLogsData, undefined>;
}
export const getMySymptomLogsRef: GetMySymptomLogsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMySymptomLogsRef:
```typescript
const name = getMySymptomLogsRef.operationName;
console.log(name);
```

### Variables
The `GetMySymptomLogs` query has no variables.
### Return Type
Recall that executing the `GetMySymptomLogs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMySymptomLogsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMySymptomLogsData {
  symptomLogs: ({
    id: UUIDString;
    logDate: DateString;
    mood: string;
    energyLevel: number;
    crampsSeverity: number;
  } & SymptomLog_Key)[];
}
```
### Using `GetMySymptomLogs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMySymptomLogs } from '@dataconnect/generated';


// Call the `getMySymptomLogs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMySymptomLogs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMySymptomLogs(dataConnect);

console.log(data.symptomLogs);

// Or, you can use the `Promise` API.
getMySymptomLogs().then((response) => {
  const data = response.data;
  console.log(data.symptomLogs);
});
```

### Using `GetMySymptomLogs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMySymptomLogsRef } from '@dataconnect/generated';


// Call the `getMySymptomLogsRef()` function to get a reference to the query.
const ref = getMySymptomLogsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMySymptomLogsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.symptomLogs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.symptomLogs);
});
```

## GetMyNotes
You can execute the `GetMyNotes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyNotes(): QueryPromise<GetMyNotesData, undefined>;

interface GetMyNotesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyNotesData, undefined>;
}
export const getMyNotesRef: GetMyNotesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyNotes(dc: DataConnect): QueryPromise<GetMyNotesData, undefined>;

interface GetMyNotesRef {
  ...
  (dc: DataConnect): QueryRef<GetMyNotesData, undefined>;
}
export const getMyNotesRef: GetMyNotesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyNotesRef:
```typescript
const name = getMyNotesRef.operationName;
console.log(name);
```

### Variables
The `GetMyNotes` query has no variables.
### Return Type
Recall that executing the `GetMyNotes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyNotesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyNotesData {
  notes: ({
    id: UUIDString;
    noteDate: DateString;
    content: string;
  } & Note_Key)[];
}
```
### Using `GetMyNotes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyNotes } from '@dataconnect/generated';


// Call the `getMyNotes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyNotes();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyNotes(dataConnect);

console.log(data.notes);

// Or, you can use the `Promise` API.
getMyNotes().then((response) => {
  const data = response.data;
  console.log(data.notes);
});
```

### Using `GetMyNotes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyNotesRef } from '@dataconnect/generated';


// Call the `getMyNotesRef()` function to get a reference to the query.
const ref = getMyNotesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyNotesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.notes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.notes);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateSymptomLog
You can execute the `CreateSymptomLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createSymptomLog(): MutationPromise<CreateSymptomLogData, undefined>;

interface CreateSymptomLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateSymptomLogData, undefined>;
}
export const createSymptomLogRef: CreateSymptomLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSymptomLog(dc: DataConnect): MutationPromise<CreateSymptomLogData, undefined>;

interface CreateSymptomLogRef {
  ...
  (dc: DataConnect): MutationRef<CreateSymptomLogData, undefined>;
}
export const createSymptomLogRef: CreateSymptomLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSymptomLogRef:
```typescript
const name = createSymptomLogRef.operationName;
console.log(name);
```

### Variables
The `CreateSymptomLog` mutation has no variables.
### Return Type
Recall that executing the `CreateSymptomLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSymptomLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSymptomLogData {
  symptomLog_insert: SymptomLog_Key;
}
```
### Using `CreateSymptomLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSymptomLog } from '@dataconnect/generated';


// Call the `createSymptomLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSymptomLog();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSymptomLog(dataConnect);

console.log(data.symptomLog_insert);

// Or, you can use the `Promise` API.
createSymptomLog().then((response) => {
  const data = response.data;
  console.log(data.symptomLog_insert);
});
```

### Using `CreateSymptomLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSymptomLogRef } from '@dataconnect/generated';


// Call the `createSymptomLogRef()` function to get a reference to the mutation.
const ref = createSymptomLogRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSymptomLogRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.symptomLog_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.symptomLog_insert);
});
```

## CreateNote
You can execute the `CreateNote` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNote(): MutationPromise<CreateNoteData, undefined>;

interface CreateNoteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateNoteData, undefined>;
}
export const createNoteRef: CreateNoteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNote(dc: DataConnect): MutationPromise<CreateNoteData, undefined>;

interface CreateNoteRef {
  ...
  (dc: DataConnect): MutationRef<CreateNoteData, undefined>;
}
export const createNoteRef: CreateNoteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNoteRef:
```typescript
const name = createNoteRef.operationName;
console.log(name);
```

### Variables
The `CreateNote` mutation has no variables.
### Return Type
Recall that executing the `CreateNote` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNoteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNoteData {
  note_insert: Note_Key;
}
```
### Using `CreateNote`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNote } from '@dataconnect/generated';


// Call the `createNote()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNote();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNote(dataConnect);

console.log(data.note_insert);

// Or, you can use the `Promise` API.
createNote().then((response) => {
  const data = response.data;
  console.log(data.note_insert);
});
```

### Using `CreateNote`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNoteRef } from '@dataconnect/generated';


// Call the `createNoteRef()` function to get a reference to the mutation.
const ref = createNoteRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNoteRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.note_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.note_insert);
});
```

