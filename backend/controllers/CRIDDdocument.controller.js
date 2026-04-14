const service = require("../services/CRIDDdocument.service");

exports.create = (req, res) => {
  const doc = service.createDocument(req.body);
  res.status(201).json(doc);
};

exports.getAll = (req, res) => {
  res.json(service.getAllDocuments());
};

exports.getById = (req, res) => {
  const doc = service.getDocumentById(req.params.id);
  if (!doc) return res.status(404).json({ error: "Not found" });
  res.json(doc);
};

exports.delete = (req, res) => {
  try {
    service.deleteDocument(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

