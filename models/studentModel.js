const mongoose = require(`mongoose`)
const studentSchema = new mongoose.Schema({
    firstName:{type:String,set: (entry) => {
        const capitalize =
        entry.charAt(0).toUpperCase() + entry.slice(1).toLowerCase();
          return capitalize;},required:[true,'Kindly enter your first name']},
    lastName:{type:String,set: (entry) => {
        const capitalize =
        entry.charAt(0).toUpperCase() + entry.slice(1).toLowerCase();
          return capitalize;},required:[true,'Kindly enter your last name']},
    age:{type:Number},
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    sex:{type: String,
        set: (entry) => {
        const capitalize =
        entry.charAt(0).toUpperCase() + entry.slice(1).toLowerCase();
          return capitalize;},
        enum: ["Male", "Female"],
        required: true,
      },
    score:{
      maths:{type:Number},english:{type:Number},biology:{type:Number},civic:{type:Number},basicTech:{type:Number}},
    totalScore:{type:Number},
    motivationalQuote:{type:String},
    studentID:{type:String,
      unique:true},
    profilePicture:{type:String}
},{timestamps:true})

const studentModel = mongoose.model(`Exams&Record`,studentSchema)

module.exports = studentModel