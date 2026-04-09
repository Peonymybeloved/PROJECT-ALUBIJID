import { describe, test, expect } from "vitest";
import request from "supertest";

const app = (await import("../app.js")).default;

describe("Auth API", () => {
  test("Valid login", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "admin@test.com", password: "1234" });

    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe("admin@test.com");
  });

  test("Invalid login", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "wrong", password: "wrong" });

    expect(res.statusCode).toBe(401);
  });
});
