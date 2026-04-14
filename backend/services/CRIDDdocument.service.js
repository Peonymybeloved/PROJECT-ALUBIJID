const { documents } = require("../models/data.store");

let counter = 1;

exports.createDocument = (data) => {
  const doc = {
    id: counter++,
    dtn: `DTN-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    status: "Pending",
    ...data,
  };

  documents.push(doc);
  return doc;
};

exports.getAllDocuments = () => documents;

exports.getDocumentById = (id) => documents.find(d => d.id === parseInt(id, 10));

exports.deleteDocument = (id) => {
  const index = documents.findIndex(d => d.id === parseInt(id, 10));
  if (index === -1) throw new Error("Not found");

  return documents.splice(index, 1);
};

