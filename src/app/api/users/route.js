import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongo/connectDB";
import { User } from "../../../lib/model/user.model";

export const GET = async () => {
  try {
    await connectDB();

    return NextResponse.json("Users list");
  } catch (error) {
    return new Response("Failed to fetch all users", {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();

    const { username, email, password, profile, credentailList } = request.body;

    const user = new User({
      username,
      email,
      password,
      profile,
      credentailList,
    });

    // save user
    await user.save();

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return new Response("Failed to create new user", {
      status: 500,
    });
  }
};
