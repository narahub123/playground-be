import express, { Request, Response, NextFunction } from "express";
import { getEnv } from "@utils";
import { asyncWrapper } from "@middlewares";
import { userServices } from "@services";
import { BadRequest, DuplicateError } from "errors";

const baseUrl = getEnv("BASE_URL");

const { getUserByEamil } = userServices;

const authController = {
  checkExistingEamil: asyncWrapper(
    "checkExistingEmail",
    async (req: Request, res: Response) => {
      const { email } = req.body;

      if (!email) {
        throw new BadRequest("이메일이 제공되지 않았습니다.");
      }

      const user = await getUserByEamil(email);

      if (user) {
        throw new DuplicateError("이미 존재하는 이메일입니다.");
      }

      res.status(200).json({
        status: "success",
        message: "사용 가능한 이메일입니다.",
        statusText: "ok",
      });
    }
  ),
};

export default authController;
