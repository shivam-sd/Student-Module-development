const StudentInfoModel = require("../models/studentinfo.model");

const CreateStudentInfo = async(req,res) => {
    try{
     const {name,rollNumber,StudentClass,section,dob,gender,fatherName,motherName,guardianName,contactNumber,email,currentAddress,permanentAddress} = req.body;

     const newStudentInfo = new StudentInfoModel({
         name,
         rollNumber,
        StudentClass,
         section,
         dob,
         gender,
         fatherName,
         motherName,
         guardianName,
         contactNumber,
         email,
         currentAddress,
         permanentAddress
     });

    await newStudentInfo.save();
    return res.status(201).json({ message: "Student information created successfully", data: newStudentInfo });
    
    }catch(err){
        console.error("Error in StudentInfo controller:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


const GetStudentInfo = async(req,res) => {
    try{
        const studentInfo = await StudentInfoModel.find();
        return res.status(200).json({ message: "Student information retrieved successfully", data: studentInfo });
    }catch(err){
        console.error("Error in GetStudentInfo controller:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    CreateStudentInfo,
    GetStudentInfo
};