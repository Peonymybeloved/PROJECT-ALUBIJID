const authService = require("../services/auth.service");

exports.login = (req, res) => {
  try {
    const { email, password } = req.body;
    const user = authService.login(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};