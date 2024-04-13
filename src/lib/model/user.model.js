const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePic: { type: String, default: "default.png" },
  password: { type: String, required: true },
  credentailList: [
    { credential: { type: Schema.Types.ObjectId, ref: "Credential" } },
  ],
});

// model the collection
const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
