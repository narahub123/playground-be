import CustomAPIError from "./custom-error";

class BadRequest extends CustomAPIError {
  constructor(message: string) {
    super(message, 400, "bad request");
  }
}

export default BadRequest;
