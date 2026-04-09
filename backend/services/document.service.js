const dataStore = require("../models/data.store");

let nextId = 1;

function createDocument(data) {
  const doc = {
    id: nextId++,
    dtn: `DTN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title: data.title,
    createdAt: new Date().toISOString()
  };
  dataStore.documents.push(doc);
  return doc;
}

function getAllDocuments() {
  return dataStore.documents;
}

function getDocumentById(id) {
  const docId = parseInt(id);
  return dataStore.documents.find(d => d.id === docId);
}

function deleteDocument,
  updateDocumentStatus(id) {
  const docId = parseInt(id);
  const index = dataStore.documents.findIndex(d => d.id === docId);
  if (index === -1) {
    throw new Error("Document not found");
  }
  dataStore.documents.splice(index, 1);
}

function updateDocumentStatus(id, status) {
  const doc = getDocumentById(id);
  if (!doc) {
    throw new Error("Document not found");
  }
  doc.status = status;
  return doc;
}

module.exports = {
  createDocument,
  getAllDocuments,
  getDocumentById,
  deleteDocument,
  updateDocumentStatus
};


