const documentService = require("../../services/CRIDDdocument.service");
const assignapproveService = require("../../services/assignapprove.service");
const dataStore = require("../../models/data.store");

describe("assignapprove Service Unit Tests", () => {
  beforeEach(() => {
    dataStore.documents.length = 0;
  });

  test("Should assign document and set Processing status", () => {
    const doc = documentService.createDocument({ title: "assignapprove Doc" });
    const assigned = assignapproveService.assignDocument(doc.id, 2);

    expect(assigned.status).toBe("Processing");
    expect(assigned.assignedTo).toBe(2);
  });

  test("Should approve document", () => {
    const doc = documentService.createDocument({ title: "assignapprove Doc" });
    const approved = assignapproveService.approveDocument(doc.id);

    expect(approved.status).toBe("Approved");
  });

  test("Should throw when assigning missing document", () => {
    expect(() => assignapproveService.assignDocument(999, 2)).toThrow("Document not found");
  });

  test("Should throw when approving missing document", () => {
    expect(() => assignapproveService.approveDocument(999)).toThrow("Document not found");
  });
});

