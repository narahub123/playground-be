import CustomAPIError from "./custom-error";

class NotFound extends CustomAPIError {
  constructor(message: string) {
    super(message, 404, "not found");
  }
}

export default NotFound;
