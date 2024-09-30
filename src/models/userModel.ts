import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    //이름
    name: {
      type: String,
      minLength: [1, "이름은 최소 1자 이상이어야 합니다."],
      maxLength: [20, "이름은 최대 20자 이하이어야 합니다."],
      required: true,
      match: /^.{1, 20}$/,
    },

    // 이메일
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/, // 이메일 형식
    },

    // 생년 월일
    birth: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9]{8}$/, // YYYYMMDD 형식의 생년월일
    },

    // 성별
    gender: {
      type: String,
      required: true,
      enum: ["m", "f", "b", "n", "l", "h"],
    },

    // 비밀번호
    password: {
      type: String,
      required: true,
    },

    // 사용자 아이디
    id: {
      type: String,
      required: true,
      unique: true,
      minLength: [4, "ID는 최소 4자 이상이어야 합니다."],
      maxLength: [20, "ID는 최대 20자 이하이어야 합니다."],
      match: /^.{4, 20}$/,
    },

    // 사용자 등급
    role: {
      type: String,
      required: true,
      enum: ["USER", "ADMIN"],
      default: "USER",
      uppercase: true,
    },

    // ip 가입시 주소
    ip: {
      type: String,
      required: true,
      match: [
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        "유효하지 않은 IP 주소 형식입니다.",
      ], // IP 주소 유효성 검사
    },

    // 가입시 위치
    location: {
      type: String,
      required: true,
    },

    // 프로필 커버 사진
    cover: {
      type: String,
      default: "",
    },

    // 프로필 유저 사진
    photo: {
      type: String,
      default: "",
    },

    // 소개글
    intro: {
      type: String,
      default: "",
      maxLenght: [150, "소개글은 최대 150자까지 입력할 수 있습니다."],
    },

    // 팔로잉 목록
    followings: {
      type: [
        {
          user: { type: String, ref: "User" },
          isMute: { type: Boolean, default: false },
        },
      ],
      default: [],
    },

    // 팔로워 목록
    followers: {
      type: [String],
      ref: "User",
      default: [],
    },

    // 인증 여부
    isAuthenticated: {
      type: Boolean,
      default: false,
    },

    // 비활성화
    isActive: {
      type: Boolean,
      default: true,
    },

    // 소셜 계정
    socials: {
      type: [String],
      enum: ["google", "naver", "kakao"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model("User", UserSchema);
