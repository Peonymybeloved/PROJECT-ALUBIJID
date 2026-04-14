const searchService = require("../../services/search.service");
const documentService = require("../../services/CRIDDdocument.service");
const dataStore = require("../../models/data.store");

describe("Search Service Unit Tests", () => {
  beforeEach(() => {
    dataStore.documents.length = 0;
    documentService.createDocument({ title: "Finance Report" });
    documentService.createDocument({ title: "HR Memo" });
  });

  test("Should find document by title", () => {
    const results = searchService.searchDocuments("Finance");

    expect(results.length).toBe(1);
    expect(results[0].title).toBe("Finance Report");
  });

  test("Should find document by DTN", () => {
    const docs = dataStore.documents;
    const dtn = docs[0].dtn;
    const results = searchService.searchDocuments(dtn);

    expect(results.length).toBe(1);
  });

  test("Should return empty array if no match", () => {
    const results = searchService.searchDocuments("Nonexistent");

    expect(results.length).toBe(0);
  });
});

