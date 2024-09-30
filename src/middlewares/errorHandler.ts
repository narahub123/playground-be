import { CustomAPIError } from "errors";
import { Request, Response, NextFunction } from "express";

const errorHandler = async (
  err: CustomAPIError | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const statusText = err.statusText || "Internal Server Error";
  const message = err.message || "내부 에러";

  res.status(statusCode).json({ status: "error", statusText, message });
};

export default errorHandler;
