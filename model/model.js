const mongoose = require("mongoose");
const { type } = require("os");
const schema = mongoose.Schema;

const userDetails = schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  desc: { type: String, required: true },
  commentDetails: [{ userIdC: String, comment: String }],
  followers: [{ id: { type: String } }],
  likes: [{ id: { type: String } }],
});

const mongSchema = mongoose.model("userDetails", userDetails);

module.exports = mongSchema;
