import express from "express";
import { authController } from "@controllers";

export default (router: express.Router) => {
  const { checkExistingEamil, checkExistingId } = authController;
  router.post("/auth/checkExistingEmail", checkExistingEamil);
  router.post("/auth/checkExistingId", checkExistingId);
};
