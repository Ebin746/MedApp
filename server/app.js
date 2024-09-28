require("dotenv").config();
const express = require("express");

const authRouter = require("./routers/auth");
const medicineRouter=require("./routers/medicine");
const dataBase = require("./DB/dataBase");

const app = express();
app.use(express.json())



app.use("/auth", authRouter);
app.use("/medicine",medicineRouter);




const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("server started on port :", PORT)
    dataBase();
})