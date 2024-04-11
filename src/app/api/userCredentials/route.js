import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongo/connectDB";

import UserCredential from "../../../../model/UserCredential";

export const GET = async (request) => {
  try {
    await connectDB();

    const userCredential = await UserCredential.find({});
    return NextResponse.json(userCredential, {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all user credentials", {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();
    const {
      accountTitle,
      email,
      password,
      description,
      accountLogo,
      credentailList,
    } = request.body;
    const userCredential = new UserCredential({
      accountTitle,
      email,
      password,
      description,
      accountLogo,
      credentailList,
    });

    // save user
    await userCredential.save();

    return NextResponse.json(userCredential);
  } catch (error) {
    return new Response("Failed to create new user credential", {
      status: 500,
    });
  }
};
