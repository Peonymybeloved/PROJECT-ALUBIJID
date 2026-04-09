const request = require("supertest");
const app = require("../app");

describe("Document API", () => {
  let docId;

  test("Create document", async () => {
    const res = await request(app)
      .post("/api/documents")
      .send({ title: "Test Doc" });

    expect(res.statusCode).toBe(201);
    expect(res.body.dtn).toBeDefined();
    docId = res.body.id;
  });

  test("Get document by ID", async () => {
    const res = await request(app)
      .get(`/api/documents/${docId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(docId);
  });

  test("Delete document", async () => {
    const res = await request(app)
      .delete(`/api/documents/${docId}`);

    expect(res.statusCode).toBe(200);
  });
});