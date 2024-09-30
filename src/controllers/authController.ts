import express, { Request, Response, NextFunction } from "express";
import { getEnv } from "@utils";
import { asyncWrapper } from "@middlewares";
import { userServices } from "@services";

const baseUrl = getEnv("BASE_URL");

const authController = {};

export default authController;
