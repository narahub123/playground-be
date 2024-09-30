import express, { Request, Response, NextFunction } from "express";
import { getEnv } from "@utils";
import { asyncWrapper } from "@middlewares";
import { userServices } from "@services";

const baseUrl = getEnv("BASE_URL");

const { getUserByEamil } = userServices;

const authController = {
  checkExistingEamil: asyncWrapper(
    "checkExistingEmail",
    async (req: Request, res: Response) => {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          status: "error",
          message: "이메일이 제공되지 않았습니다.",
          statusText: "BadRequest",
        });
      }

      const user = await getUserByEamil(email);

      if (user) {
        return res.status(409).json({
          status: "error",
          message: "이미 존재하는 이메일입니다.",
          statusText: "duplicate error",
        });
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
