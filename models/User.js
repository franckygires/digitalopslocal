// models/User.js

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  speciality: {
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

  role: { type: String, default: "user" },
  
});

UserSchema.set("timestamps", true);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
