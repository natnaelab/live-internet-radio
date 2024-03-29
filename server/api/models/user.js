const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

function toLower(st) {
  return st.toLowerCase();
}

const UserSchema = new Schema({
  username: { type: String, set: toLower, required: true, unique: true },
  password: { type: String, required: true },
  pfp: { type: String },
  userType: { type: Number, default: 0 },
  Date: { type: Date, default: Date.now }
});

module.exports = model("user", UserSchema.plugin(uniqueValidator));
