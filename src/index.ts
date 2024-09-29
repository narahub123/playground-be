import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

const app = express();

// 포트 환경 변수 설정 여부 확인
if (!process.env.BASE_URL) {
  console.error(`BASE_URL 환경변수가 설정되지 않았습니다.`);
  process.exit(1); // 프로세스 종료
}

const baseUrl = process.env.BASE_URL;

app.use(
  cors({
    origin: baseUrl,
    methods: "GET, POST, PUT, PATCH, DELETE",
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(compression());

// 포트 환경 변수 설정 여부 확인
if (!process.env.PORT) {
  console.error(`PORT 환경변수가 설정되지 않았습니다.`);
  process.exit(1); // 프로세스 종료
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에 연결되었습니다.`);
});
