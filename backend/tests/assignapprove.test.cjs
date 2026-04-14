const request = require("supertest");
const app = require("../app");

describe("assignapprove API", () => {
  let docId;

  beforeAll(async () => {
    const res = await request(app)
      .post("/api/documents")
      .send({ title: "assignapprove Doc" });

    docId = res.body.id;
  });

  test("Assign document", async () => {
    const res = await request(app)
      .post(`/api/assignapprove/${docId}/assign`)
      .send({ employeeId: 2 });

    expect(res.body.status).toBe("Processing");
    expect(res.body.assignedTo).toBe(2);
  });

  test("Approve document", async () => {
    const res = await request(app)
      .post(`/api/assignapprove/${docId}/approve`);

    expect(res.body.status).toBe("Approved");
  });
});

