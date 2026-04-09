const request = require("supertest");
const app = require("../app");

describe("Workflow API", () => {
  let docId;

  beforeAll(async () => {
    const res = await request(app)
      .post("/api/documents")
      .send({ title: "Workflow Doc" });

    docId = res.body.id;
  });

  test("Assign document", async () => {
    const res = await request(app)
      .post(`/api/workflow/${docId}/assign`)
      .send({ employeeId: 2 });

    expect(res.body.status).toBe("Processing");
  });

  test("Approve document", async () => {
    const res = await request(app)
      .post(`/api/workflow/${docId}/approve`);

    expect(res.body.status).toBe("Approved");
  });
});