const authService = require("../../services/auth.service");
const dataStore = require("../../models/data.store");

describe("Auth Service Unit Tests", () => {
  test("Should login with valid credentials", () => {
    const user = authService.login("admin@test.com", "1234");

    expect(user).toEqual({
      id: 1,
      email: "admin@test.com",
      role: "admin"
    });
  });

  test("Should throw error on invalid credentials", () => {
    expect(() => {
      authService.login("wrong@test.com", "wrong");
    }).toThrow("Invalid credentials");
  });
});

