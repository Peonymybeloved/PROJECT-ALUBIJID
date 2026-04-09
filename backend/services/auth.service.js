import dataStore from "../models/data.store.js";

function login(email, password) {
  const user = dataStore.users.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error("Invalid credentials");
  }
  return { id: user.id, email: user.email, role: user.role };
}

export {
  login
};



