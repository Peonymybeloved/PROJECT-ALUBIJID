import { describe, test, expect } from "vitest";
import request from "supertest";
const { default: app } = await import("../app.js");

describe("Temp Auth API", () => {
  test("should run", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.status).toBe(200);
  });
});
