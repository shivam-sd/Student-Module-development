const express = require("express");
const {CreateStudentInfo, GetStudentInfo} = require("../controllers/studentinfo.controller");
const Router = express.Router();

Router.post("/CreateStudentInfo", CreateStudentInfo);
Router.get("/GetStudentInfo", GetStudentInfo);

module.exports = Router;