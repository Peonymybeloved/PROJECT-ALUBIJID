const documentService = require("../../services/CRIDDdocument.service");
const dataStore = require("../../models/data.store");

describe("Document Service Unit Tests", () => {
  beforeEach(() => {
    dataStore.documents.length = 0;
  });

  test("Should create document with DTN and pending status", () => {
    const doc = documentService.createDocument({ title: "Test Doc" });

    expect(doc).toHaveProperty("id");
    expect(doc).toHaveProperty("dtn");
    expect(doc.status).toBe("Pending");
  });

  test("Should return all documents", () => {
    documentService.createDocument({ title: "Doc1" });
    const docs = documentService.getAllDocuments();

    expect(docs.length).toBe(1);
  });

  test("Should get document by ID", () => {
    const doc = documentService.createDocument({ title: "Doc2" });
    const found = documentService.getDocumentById(doc.id);

    expect(found.title).toBe("Doc2");
  });

  test("Should delete document", () => {
    const doc = documentService.createDocument({ title: "Delete Me" });
    documentService.deleteDocument(doc.id);

    expect(dataStore.documents.length).toBe(0);
  });
});

