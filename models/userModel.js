const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName:{type:String,set: (entry) => {
        const capitalize =
        entry.charAt(0).toUpperCase() + entry.slice(1).toLowerCase();
          return capitalize;},required:[true,'Kindly enter your first name']},
    lastName:{type:String,set: (entry) => {
        const capitalize =
        entry.charAt(0).toUpperCase() + entry.slice(1).toLowerCase();
          return capitalize;},required:[true,'Kindly enter your last name']},
    age:{type:Number},
    sex:{type:String,
      set: (entry) => {
        const capitalize =
        entry.charAt(0).toUpperCase() + entry.slice(1).toLowerCase();
          return capitalize;},
        enum: ["Male", "Female"],
        required: true
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isVerified: { type: Boolean, default: false },
    isTeacher: { type: Boolean, default: true},
    isAdmin: { type: Boolean, default: false },
    profilePicture:{type:String},
    blackList:[]
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
