const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    medicines: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicine'
      }
    ]
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", UserSchema);
