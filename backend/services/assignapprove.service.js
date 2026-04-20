const { documents } = require("../models/data.store");

exports.assignDocument = (docId, employeeId) => { //Assigns a doc to an employee based on the doc and employee id

  const doc = documents.find(d => d.id === parseInt(docId, 10));
  if (!doc) throw new Error("Document not found");

  doc.assignedTo = employeeId;
  doc.status = "Processing";
  return doc;
};

exports.approveDocument = (docId) => { //Administrator exclusive function, which allows administrator to approve of documents pushed by employees.
  const doc = documents.find(d => d.id === parseInt(docId, 10));
  if (!doc) throw new Error("Document not found");

  doc.status = "Approved";
  return doc;
};

