const { Schema, model } = require("mongoose");

function toLower(st) {
  return st.toLowerCase();
}

const UserSchema = new Schema({
  username: { type: String, set: toLower, required: true, unique: true },
  password: { type: String, required: true },
  pfp: { type: String, required: true },
  Date: { type: Date, default: Date.now }
});

module.exports = model("user", UserSchema);