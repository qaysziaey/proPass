import { Credential } from "../../lib/models/Credential";
import { connectDB } from "../../lib/mongo/connectDB";

export async function createCredential(credential) {
  await connectDB();
  return await Credential.create(credential);
}
export async function getAllCredentials() {
  await connectDB();
  return await Credential.find();
}
