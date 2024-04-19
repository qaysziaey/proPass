import { connectDB } from "../../../lib/mongo/connectDB";
import { Credential } from "../../../lib/models/Credential";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { accountTitle, email, password, description, logo } =
      await request.json();

    // Hashing password with
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectDB();

    await Credential.create({
      accountTitle,
      email,
      password: hashedPassword,
      description,
      logo,
    });
    console.log("Description", description);

    return NextResponse.json(
      {
        msg: "Credentials successfully created",
      },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { msg: "Error while new creating credentials" },
      { status: 500 },
    );
  }
}
