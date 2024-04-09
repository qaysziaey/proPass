const mongoose = require('mongoose');
const { Schema } = mongoose;

const CredentialSchema = new Schema(
  {
    accountTitle: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    accountLogo: {
      type: Number,
      required: true,
      default: 'default.png',
    },
    password: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// model the collection
const Credential =
  mongoose.models.Credential || mongoose.model('Credential', CredentialSchema);

module.exports = Credential;
