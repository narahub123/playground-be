import { getEnv } from "@utils";
import express, { Request, Response, NextFunction } from "express";

const baseUrl = getEnv("BASE_URL");
