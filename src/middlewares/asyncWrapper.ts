import { Request, Response, NextFunction } from "express";

export const asyncWrapper = (
  name: string,
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err: any) {
      console.log(`${name}에서 에러가 발생했습니다.`, err.message);

      next(err);
    }
  };
};
