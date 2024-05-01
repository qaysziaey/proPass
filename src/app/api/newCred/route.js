import { auth } from "@clerk/nextjs/server";
import { connectDB } from "../../../lib/mongo/connectDB";
import { Credential } from "../../../lib/models/Credential";
import CryptoJS from "crypto-js";

import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { userId: clerkId } = auth();
    const { accountTitle, email, password, description, accountIcon } =
      await request.json();

    const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

    // Encrypting password
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      ENCRYPTION_KEY,
    ).toString();

    await connectDB();

    await Credential.create({
      clerkId,
      accountTitle,
      email,
      password: encryptedPassword,
      description,
      accountIcon,
    });

    return NextResponse.json(
      {
        msg: "Credentials successfully created",
      },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { msg: "Error while new creating credentials" },
      { status: 500 },
    );
  }
}
