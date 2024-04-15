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
});

export const Credential =
  models?.Credential || model("Credential", CredentialSchema);
