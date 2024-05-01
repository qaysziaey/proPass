import { connectDB } from "../../../lib/mongo/connectDB";
import { Credential } from "../../../lib/models/Credential";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function DELETE(request) {
  try {
    const { userId: clerkId } = auth();

    await connectDB();
    const body = await request.json();
    const { id } = body;

    const deleteInfo = await Credential.deleteOne({
      _id: id,
      clerkId,
    });
    if (deleteInfo.deletedCount === 0) {
      throw new Error("Credential not found");
    }
    return NextResponse.json({ deleteInfo }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { msg: "Error while deleting credentials" },
      { status: 500 },
    );
  }
}
