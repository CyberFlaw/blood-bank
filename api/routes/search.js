const express = require("express");
const User = require("../model/User");

const router = express.Router();

router.post("/search", async (req, res) => {
  User.find(
    { bloodtype: req.body.bloodtype },
    "name phonenumber email",
    function (err, datas) {
      if (err) console.log("Nothing found");
      else {
        console.log("Found!", datas);
        res.send(datas);
      }
    }
  );
});

module.exports = router;
