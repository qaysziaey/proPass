import mongoose from "mongoose";
import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { Webhook } from "svix";

// import { createUser } from "../../../../lib/actions/user.action";

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the user schema
const userSchema = new mongoose.Schema({
  clerkId: String,
  email: String,
  username: String,
  firstName: String,
  lastName: String,
  profilePic: String,
  password: String,
  credentialList: [String],
});

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default async function POST(req, res) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return res.status(500).send("WEBHOOK_SECRET is missing");
  }

  // Get the headers
  const svix_id = req.headers["svix-id"];
  const svix_timestamp = req.headers["svix-timestamp"];
  const svix_signature = req.headers["svix-signature"];

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).send("Error occurred -- no svix headers");
  }

  // Get the body
  const body = JSON.stringify(req.body);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return res.status(400).send("Error occurred");
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  // Create a new user in MongoDB
  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } =
      evt.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username,
      firstName: first_name,
      lastName: last_name,
      profilePic: image_url,
      password: "password",
      credentialList: [],
    };

    console.log("User created:", user);

    try {
      const newUser = new UserModel(user);
      await newUser.save();

      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
        },
      });

      return NextResponse.json({ message: "User created", user: newUser });
    } catch (error) {
      console.error("Error creating user in MongoDB:", error);
      return res.status(500).send("Error creating user in MongoDB");
    }
  }

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return res.status(200).send("");
}
