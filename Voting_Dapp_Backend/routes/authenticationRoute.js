const express = require('express')
const router = express.Router()
const {ethers} = require('ethers')
const jwt = require('jsonwebtoken');
const { authentication } = require('../middlewares/authentication');

router.post('/postCandidateImage',authentication,async(req,res) =>{
  try{
     const {accountAddress} = req.query;
     const {signature} = req.body

     if(!signature || !accountAddress){
      return res.status(400).json({
        message:"Missing signature or accountAddress"
      });
     }

     const message ="Welcome to Voting Dapp.You accept our terms and conditions.";
     const recoverAddress = ethers.verifyMessage(message,signature);
     
     console.log("accountAddress:", accountAddress);
     console.log("recoverAddress:", recoverAddress);

     if(recoverAddress.toLowerCase() !== accountAddress.toLowerCase()){
      return res.status(401).json({
        message: "Invalid signature",
      });
     }
   const token = jwt.sign(
      { accountAddress },
      process.env.JWT_SECRET || "secretKey"
    );

    return res.status(200).json({
      message: "Authentication Successful",
      token,
    });
  }

  catch(error){
    console.error(error);
    return res.status(500).json({
      message:"Authentication failed"
    });
  }
});

module.exports = router;