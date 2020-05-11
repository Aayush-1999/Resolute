const express = require("express"),
    router    = express.Router(),
    User      = require("../models/user"),
    Doctor    = require("../models/doctor");

router.post("/",(req,res)=>{
        User.findById(req.body.id)
        .populate('doctor')
        .exec((err,user)=>{
            if(err){
                console.log(err)
            }
            else{
                res.status(200).json({user})
            }
        })
})

module.exports = router;