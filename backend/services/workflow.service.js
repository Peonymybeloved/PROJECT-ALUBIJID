const { documents } = require("../models/data.store");

exports.assignDocument = (docId, employeeId) => {
  const doc = documents.find(d => d.id == docId);
  if (!doc) throw new Error("Document not found");

  doc.assignedTo = employeeId;
  doc.status = "Processing";

  return doc;
};

exports.approveDocument = (docId) => {
  const doc = documents.find(d => d.id == docId);
  if (!doc) throw new Error("Document not found");

  doc.status = "Approved";
  return doc;
};