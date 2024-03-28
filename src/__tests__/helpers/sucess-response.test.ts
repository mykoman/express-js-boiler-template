import { SuccessResponse } from "../../helpers/success-response";

describe("test success response class", () => {
  it("should return status of success when returned", () => {
    const status = "success";
    const response = new SuccessResponse({ message: "Fetched successfully" });
    expect(response.status).toBe(status);
  });

  it("should match object when all required arguments are passed as argument", () => {
    const message = "Created";
    const data = {
      items: [],
      paginations: {
        totalItems: 1,
        currentPage: 1,
        totalPages: 1,
        hasNextPage: false,
        hasPrevPage: false,
      },
    };
    const expectedOutput = {
      message,
      status: "success",
      data,
    };
    const response = new SuccessResponse({ message, data });
    expect(response).toMatchObject(expectedOutput);
  });

  it("should match empty data when data is not passed as argument", () => {
    const message = "Created";
    const expectedOutput = {
      message,
    };
    const response = new SuccessResponse({ message });
    expect(response).toMatchObject(expectedOutput);
  });
});
