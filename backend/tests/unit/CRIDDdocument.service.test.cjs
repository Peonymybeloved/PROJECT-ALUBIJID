const documentService = require("../../services/CRIDDdocument.service");
const dataStore = require("../../models/data.store");

describe("Document Service Unit Tests", () => {
  beforeEach(() => {
    dataStore.documents.length = 0;
  });


  test("Should create document with DTN and pending status", () => {
    //Calls the createDocument function and asserts the result of a fully created document
    const doc = documentService.createDocument({ title: "Test Doc" });

    //It must have a generated id, dtn and status
    expect(doc).toHaveProperty("id");
    expect(doc).toHaveProperty("dtn");
    expect(doc.status).toBe("Pending");
  });

  test("Should return all documents", () => {
    //Calls the createDocument to make a sample document to store in the array, then calls function
    documentService.createDocument({ title: "Doc1" });
    const docs = documentService.getAllDocuments();

    //expects the sample document to be in the array. (equiv = 1)
    expect(docs.length).toBe(1);
  });

  test("Should get document by ID", () => {
    //Creates a sample document to use for calling function, then calls function
    const doc = documentService.createDocument({ title: "Doc2" });
    const found = documentService.getDocumentById(doc.id);

    //by calling document’s ID, expects the name of the document
    expect(found.title).toBe("Doc2");
  });

  test("Should delete document", () => {
    //Creates sample document to delete, then calls function deleteDocument to test
    const doc = documentService.createDocument({ title: "Delete Me" });
    documentService.deleteDocument(doc.id);
    
    //Expects the array to be empty
    expect(dataStore.documents.length).toBe(0);
  });
});

