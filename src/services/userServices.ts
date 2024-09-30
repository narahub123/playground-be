import express from "express";
import { User } from "@models";

const userServices = {
  getUserByEamil: async (email: string) => {
    try {
      return await User.findOne({ email });
    } catch (error: any) {
      console.log("getUserByEmail에서 에러", error.errors);
    }
  },
};

export default userServices;
