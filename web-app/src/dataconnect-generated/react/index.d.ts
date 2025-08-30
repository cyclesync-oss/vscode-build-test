import { CreateSymptomLogData, GetMySymptomLogsData, CreateNoteData, GetMyNotesData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateSymptomLog(options?: useDataConnectMutationOptions<CreateSymptomLogData, FirebaseError, void>): UseDataConnectMutationResult<CreateSymptomLogData, undefined>;
export function useCreateSymptomLog(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSymptomLogData, FirebaseError, void>): UseDataConnectMutationResult<CreateSymptomLogData, undefined>;

export function useGetMySymptomLogs(options?: useDataConnectQueryOptions<GetMySymptomLogsData>): UseDataConnectQueryResult<GetMySymptomLogsData, undefined>;
export function useGetMySymptomLogs(dc: DataConnect, options?: useDataConnectQueryOptions<GetMySymptomLogsData>): UseDataConnectQueryResult<GetMySymptomLogsData, undefined>;

export function useCreateNote(options?: useDataConnectMutationOptions<CreateNoteData, FirebaseError, void>): UseDataConnectMutationResult<CreateNoteData, undefined>;
export function useCreateNote(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNoteData, FirebaseError, void>): UseDataConnectMutationResult<CreateNoteData, undefined>;

export function useGetMyNotes(options?: useDataConnectQueryOptions<GetMyNotesData>): UseDataConnectQueryResult<GetMyNotesData, undefined>;
export function useGetMyNotes(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyNotesData>): UseDataConnectQueryResult<GetMyNotesData, undefined>;
