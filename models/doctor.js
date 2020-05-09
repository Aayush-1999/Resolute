const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    name:String,
    email:String,
    experience:Number,
    contact:Number,
    speciality:String,
    timings:String
})

module.exports = mongoose.model("Doctor",DoctorSchema)