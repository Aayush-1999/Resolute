const express = require("express"),
    router    = express.Router(),
    User      = require("../models/user"),
    Doctor    = require("../models/doctor");

router.get("/",async (req,res)=>{
    try{
        let user = User.findById(req.body.userId);
        console.log(user);
        let doctors=[];
        user.doctor.map((doctorId,index)=>{
            let doctor =  Doctor.findById(doctorId)
            console.log(doctor)
            doctors.push(doctor)
        })
        res.status(200).json(doctors)
    }
    catch(err){
        console.log(err)
        res.status(400)
    }

})

module.exports = router;