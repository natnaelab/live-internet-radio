const { Schema, model } = require("mongoose");

const streamSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  playlist: Array,
  listeners: Array,
  chat: {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    msg: String,
    Date: { type: Date, default: Date.now }
  },
  Date: { type: Date, default: Date.now }
});

module.exports = model("stream", streamSchema);
