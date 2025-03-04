/**
 * @description This class ensures that there is a consistent success response across the application
 */
export class SuccessResponse {
  message: string;
  status: string;
  data: object;

  constructor({
    message,
    status = "success",
    data = {},
  }: {
    message: string;
    status?: string;
    data?: object;
  }) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
