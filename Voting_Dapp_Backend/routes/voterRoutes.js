const express = require('express');
const { authentication } = require("../middlewares/authentication");
const router = express.Router();
const VoterModel = require("../models/VoterSchema")
const multer = require("../middlewares/multer");

router.post('/postVoterImage',authentication,multer.uploadVoter,async(req,res)=>{
    try{
        const {accountAddress} = req.body;
        const imageName = req.file.filename;
        await VoterModel.create({
            accountAddress,
            imageName
        })
        res.status(200).json({message:"successful"})
    }catch(error){
        console.error(error)
    }
})

module.exports=router