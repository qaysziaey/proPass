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

// Delete Credential by id

export async function deleteCredential(id) {
  await connectDB();
  return await Credential.deleteOne({ _id: id });
}
