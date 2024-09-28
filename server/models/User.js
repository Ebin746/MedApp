const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true, // Corrected: Make sure spelling is correct
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,  // Ensure this field is properly handled
    },
    medicines: [
      { 
        type: mongoose.Schema.Types.ObjectId, // Mongoose ObjectId reference
        ref: 'Medicine'  // Refers to the Medicine model
      }
    ]
  },
  {
    timestamps: true,  // Automatically manages createdAt and updatedAt fields
  }
);

// Export the User model
module.exports = mongoose.model("User", UserSchema);
