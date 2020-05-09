const express = require("express"),
    router    = express.Router(),
    User      = require("../models/user"),
    Doctor    = require("../models/doctor");

router.post("/",async(req,res)=>{
    try{
        console.log(req.body)
        console.log(req.user._id)
        let user = await User.findById(req.user._id)
        console.log(user)
        const doctor = req.body
        user.doctor.push(doctor);
        await user.save();
        const newDoctor = await Doctor.save(doctor)
        console.log(user)
        console.log(doctor)
        res.status(200)
    }
    catch(err){
        res.status(400)
    }



})

module.exports = router;