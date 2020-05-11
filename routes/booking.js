const express = require("express"),
    router    = express.Router(),
    User      = require("../models/user"),
    Doctor    = require("../models/doctor");

router.post("/",async(req,res)=>{
    try{
        let user = await User.findById(req.body.id)
        const newDoctor = await Doctor.create(req.body.doctor)
        user.doctor.push(newDoctor);
        await user.save();
        res.status(200).json({})
    }
    catch(err){
        console.log(err)
        res.status(400).json({})
    }
})

module.exports = router;