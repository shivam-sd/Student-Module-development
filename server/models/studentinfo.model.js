const mongoose = require("mongoose");

const studentInfoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  rollNumber: {
    type: String,
  },
  Studentclass: {
    type: String,
  },
  section: {
    type: String,
  },
  gender: {
    type: String,
  },
  dob: {
    type: Date,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  guardianName: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  currentAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
  }
}, {
  timestamps: true
});

const StudentInfo = mongoose.model('StudentInfo', studentInfoSchema);
module.exports =  StudentInfo;
