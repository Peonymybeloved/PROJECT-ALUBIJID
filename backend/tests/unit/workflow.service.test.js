const documentService = require("../../services/document.service");
const workflowService = require("../../services/workflow.service");
const dataStore = require("../../models/data.store");

describe("Workflow Service Unit Tests", () => {
  beforeEach(() => {
    dataStore.documents.length = 0;
  });

  test("Should assign document and set Processing status", () => {
    const doc = documentService.createDocument({ title: "Workflow Doc" });
    const assigned = workflowService.assignDocument(doc.id, 2);

    expect(assigned.status).toBe("Processing");
    expect(assigned.assignedTo).toBe(2);
  });

  test("Should approve document", () => {
    const doc = documentService.createDocument({ title: "Workflow Doc" });
    const approved = workflowService.approveDocument(doc.id);

    expect(approved.status).toBe("Approved");
  });

  test("Should throw when assigning missing document", () => {
    expect(() => workflowService.assignDocument(999, 2)).toThrow("Document not found");
  });

  test("Should throw when approving missing document", () => {
    expect(() => workflowService.approveDocument(999)).toThrow("Document not found");
  });
});

