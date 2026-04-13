const { users } = require("../models/data.store");

exports.login = (email, password) => {
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");

  return { id: user.id, email: user.email, role: user.role };
};

