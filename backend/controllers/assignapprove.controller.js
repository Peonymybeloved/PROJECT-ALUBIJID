const service = require("../services/assignapprove.service");

exports.assign = (req, res) => {
  try {
    const doc = service.assignDocument(req.params.id, req.body.employeeId);
    res.json(doc);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.approve = (req, res) => {
  try {
    const doc = service.approveDocument(req.params.id);
    res.json(doc);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

