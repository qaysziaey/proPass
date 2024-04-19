import { Schema, model, models } from "mongoose";

const CredentialSchema = new Schema({
  accountTitle: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  logo: {
    type: String,
  },
});

export const Credential =
  models?.Credential || model("Credential", CredentialSchema);
