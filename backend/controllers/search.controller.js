const service = require("../services/search.service");

exports.search = (req, res) => {
  const result = service.searchDocuments(req.query.q || "");
  res.json(result);
};