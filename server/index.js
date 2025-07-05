const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const DBConnection = require("./db/db.connection");
const studentInfoRouter = require("./routes/studentinfo");
const cors = require("cors");

DBConnection();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req,res) => {
    res.send("Hello, World!");
});


app.use("/api", studentInfoRouter);

app.listen(port, () => {
    console.log("Server is running" , port);
})