const { documents } = require("../models/data.store");

exports.searchDocuments = (query) => {
  return documents.filter(d =>
    d.dtn.includes(query) ||
    d.title?.toLowerCase().includes(query.toLowerCase())
  );
};