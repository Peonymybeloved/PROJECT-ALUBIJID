const documentService = require("../../services/CRIDDdocument.service");
const assignapproveService = require("../../services/assignapprove.service");
const dataStore = require("../../models/data.store");

describe("assignapprove Service Unit Tests", () => {
  beforeEach(() => {
    dataStore.documents.length = 0;
  });

  test("Should assign document and set Processing status", () => {
    //Creates a sample document 
    //Calls function assignDocument to assign to an employee’s ID.
    const doc = documentService.createDocument({ title: "assignapprove Doc" });
    const assigned = assignapproveService.assignDocument(doc.id, 2);

    //Expects the status to be set to processing and that the employee is in the variable of assigned to.
    expect(assigned.status).toBe("Processing");
    expect(assigned.assignedTo).toBe(2);
  });

  test("Should approve document", () => {
    //Creates sample document 
    const doc = documentService.createDocument({ title: "assignapprove Doc" });
    //Calls approveDocument to approve the function
    const approved = assignapproveService.approveDocument(doc.id);

    //Expects the status to be set to approved.
    expect(approved.status).toBe("Approved");
  });

  test("Should throw when assigning missing document", () => {  //If not, expects to throw the error message.
    expect(() => assignapproveService.assignDocument(999, 2)).toThrow("Document not found");
  });

  test("Should throw when approving missing document", () => {//If not, expects to throw the error message.
    expect(() => assignapproveService.approveDocument(999)).toThrow("Document not found");
  });
});

