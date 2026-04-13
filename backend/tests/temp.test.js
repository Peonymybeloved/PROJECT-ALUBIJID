const request = require("supertest");
const app = require("../app");

describe("Temp API", () => {
  test("should respond to ping", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Server running");
  });
});

