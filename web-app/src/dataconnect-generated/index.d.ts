import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateNoteData {
  note_insert: Note_Key;
}

export interface CreateSymptomLogData {
  symptomLog_insert: SymptomLog_Key;
}

export interface Cycle_Key {
  id: UUIDString;
  __typename?: 'Cycle_Key';
}

export interface GetMyNotesData {
  notes: ({
    id: UUIDString;
    noteDate: DateString;
    content: string;
  } & Note_Key)[];
}

export interface GetMySymptomLogsData {
  symptomLogs: ({
    id: UUIDString;
    logDate: DateString;
    mood: string;
    energyLevel: number;
    crampsSeverity: number;
  } & SymptomLog_Key)[];
}

export interface Note_Key {
  id: UUIDString;
  __typename?: 'Note_Key';
}

export interface Recommendation_Key {
  id: UUIDString;
  __typename?: 'Recommendation_Key';
}

export interface SymptomLog_Key {
  id: UUIDString;
  __typename?: 'SymptomLog_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateSymptomLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateSymptomLogData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateSymptomLogData, undefined>;
  operationName: string;
}
export const createSymptomLogRef: CreateSymptomLogRef;

export function createSymptomLog(): MutationPromise<CreateSymptomLogData, undefined>;
export function createSymptomLog(dc: DataConnect): MutationPromise<CreateSymptomLogData, undefined>;

interface GetMySymptomLogsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMySymptomLogsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMySymptomLogsData, undefined>;
  operationName: string;
}
export const getMySymptomLogsRef: GetMySymptomLogsRef;

export function getMySymptomLogs(): QueryPromise<GetMySymptomLogsData, undefined>;
export function getMySymptomLogs(dc: DataConnect): QueryPromise<GetMySymptomLogsData, undefined>;

interface CreateNoteRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateNoteData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateNoteData, undefined>;
  operationName: string;
}
export const createNoteRef: CreateNoteRef;

export function createNote(): MutationPromise<CreateNoteData, undefined>;
export function createNote(dc: DataConnect): MutationPromise<CreateNoteData, undefined>;

interface GetMyNotesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyNotesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyNotesData, undefined>;
  operationName: string;
}
export const getMyNotesRef: GetMyNotesRef;

export function getMyNotes(): QueryPromise<GetMyNotesData, undefined>;
export function getMyNotes(dc: DataConnect): QueryPromise<GetMyNotesData, undefined>;

