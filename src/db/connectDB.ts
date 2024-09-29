import mongoose from "mongoose";
import { getEnv } from "@utils";

const connectDB = async () => {
  const mongoUrl = getEnv("MONGO_URL");

  if (!mongoUrl) {
    console.error(
      "환경 변수 MONGO_URL이 설정되어 있지 않아 몽고DB와의 연결이 실패하였습니다."
    );

    return;
  }

  // 디버깅 모드 활성화
  mongoose.set("debug", true);

  try {
    await mongoose.connect(mongoUrl as string);

    console.log(
      `몽고DB 데이터베이스 ${mongoose.connection.name}에 연결되었습니다.`
    );
  } catch (error: any) {
    console.error(`몽고DB와 연결이 실패하였습니다.`, error.message);

    return;
  }

  // 연결 상태 확인
  checkConnection();
};

// 연결 상태 확인 함수
const checkConnection = async () => {
  const state = mongoose.connection.readyState;
  if (state === 1) {
    console.log(`몽고DB에 연결되어 있습니다.`);
  } else {
    console.log("몽고DB에 연결되어 있지 않습니다.");
  }
};

// Graceful shutdown 처리
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("몽고DB 연결이 종료되었습니다.");
  process.exit(0);
});

export default connectDB;
