const { documents } = require("../models/data.store");

exports.searchDocuments = (query) => {
  const normalized = String(query || "").toLowerCase();
  return documents.filter(doc =>
    String(doc.dtn).toLowerCase().includes(normalized) ||
    String(doc.title || "").toLowerCase().includes(normalized)
  );
};

