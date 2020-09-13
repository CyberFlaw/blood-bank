const express = require("express");
const User = require("../model/User");

const router = express.Router();

router.post("/search", async (req, res) => {

  User.find({ branch: req.body.branch, bloodtype: req.body.bloodtype, }, 'name phonenumber email', function (err, datas) {
    if(err)
      console.log("Nothing found");
    else
      console.log("Found!", datas);
  })

});


module.exports = router;
