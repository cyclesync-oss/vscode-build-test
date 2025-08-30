import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'vscode',
  location: 'us-central1'
};

export const createSymptomLogRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSymptomLog');
}
createSymptomLogRef.operationName = 'CreateSymptomLog';

export function createSymptomLog(dc) {
  return executeMutation(createSymptomLogRef(dc));
}

export const getMySymptomLogsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMySymptomLogs');
}
getMySymptomLogsRef.operationName = 'GetMySymptomLogs';

export function getMySymptomLogs(dc) {
  return executeQuery(getMySymptomLogsRef(dc));
}

export const createNoteRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNote');
}
createNoteRef.operationName = 'CreateNote';

export function createNote(dc) {
  return executeMutation(createNoteRef(dc));
}

export const getMyNotesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyNotes');
}
getMyNotesRef.operationName = 'GetMyNotes';

export function getMyNotes(dc) {
  return executeQuery(getMyNotesRef(dc));
}

