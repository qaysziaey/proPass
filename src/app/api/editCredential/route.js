import { connectDB } from "../../../lib/mongo/connectDB";
import { Credential } from "../../../lib/models/Credential";
import { NextResponse } from "next/server";

export async function PATCH(request) {
  try {
    await connectDB();
    const { id, accountTitle, email, password, description, accountIcon } =
      await request.json();
    const credential = await Credential.findOne({ _id: id });
    credential.accountTitle = accountTitle;
    credential.email = email;
    credential.password = password;
    credential.description = description;
    credential.accountIcon = accountIcon;
    await credential.save();
    return NextResponse.json({ credential }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "Error while editing credentials" });
  }
}
