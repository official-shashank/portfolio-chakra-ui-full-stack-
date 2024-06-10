const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  try {
    // Only hash the password if it has been modified or is new
    if (!this.isModified("password")) {
      return next();
    }

    // Hash the password
    this.password = await bcrypt.hash(this.password, 10);

    // Continue with the saving process
    next();
  } catch (error) {
    next(error); // Pass any error to the next middleware
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
