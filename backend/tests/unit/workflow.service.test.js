const documentService = require("../../services/document.service");
const dataStore = require("../../models/data.store");

describe("Document Service Unit Tests", () => {

  beforeEach(() => {
    dataStore.documents.length = 0; // reset
  });

  test("Should create document with DTN", () => {
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

  test("Should return undefined for invalid ID", () => {
    const result = documentService.getDocumentById(999);

    expect(result).toBeUndefined();
  });

  test("Should delete document", () => {
    const doc = documentService.createDocument({ title: "Delete Me" });

    documentService.deleteDocument(doc.id);

    expect(dataStore.documents.length).toBe(0);
  });

  test("Should throw error when deleting non-existent doc", () => {
    expect(() => {
      documentService.deleteDocument(999);
    }).toThrow("Not found");
  });

});