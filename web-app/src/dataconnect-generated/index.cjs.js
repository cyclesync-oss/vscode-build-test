const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'vscode',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createSymptomLogRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSymptomLog');
}
createSymptomLogRef.operationName = 'CreateSymptomLog';
exports.createSymptomLogRef = createSymptomLogRef;

exports.createSymptomLog = function createSymptomLog(dc) {
  return executeMutation(createSymptomLogRef(dc));
};

const getMySymptomLogsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMySymptomLogs');
}
getMySymptomLogsRef.operationName = 'GetMySymptomLogs';
exports.getMySymptomLogsRef = getMySymptomLogsRef;

exports.getMySymptomLogs = function getMySymptomLogs(dc) {
  return executeQuery(getMySymptomLogsRef(dc));
};

const createNoteRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNote');
}
createNoteRef.operationName = 'CreateNote';
exports.createNoteRef = createNoteRef;

exports.createNote = function createNote(dc) {
  return executeMutation(createNoteRef(dc));
};

const getMyNotesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyNotes');
}
getMyNotesRef.operationName = 'GetMyNotes';
exports.getMyNotesRef = getMyNotesRef;

exports.getMyNotes = function getMyNotes(dc) {
  return executeQuery(getMyNotesRef(dc));
};
