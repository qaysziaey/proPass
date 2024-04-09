const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  profile: { type: String, default: 'default.png' },
  credentailList: [
    { credential: { type: Schema.Types.ObjectId, ref: 'Credential' } },
  ],
});

// model the collection
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
