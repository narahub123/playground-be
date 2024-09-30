import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerDocumnet from "swagger/swagger.json";
import { getEnv } from "@utils";
import connectDB from "@db/connectDB";

const app = express();

const baseUrl = getEnv("BASE_URL");

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerDocumnet));

app.use(
  cors({
    origin: baseUrl as string,
    methods: "GET, POST, PUT, PATCH, DELETE",
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(compression());

connectDB();

const PORT = getEnv("PORT");

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에 연결되었습니다.`);
});
