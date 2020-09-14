const express = require("express");
const User = require("../model/User");

const { registerValidation } = require("../validation/registerValidation");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Api data lib... ");
});

router.post("/register", async (req, res) => {
  const checkEmailDuplication = await User.findOne({ email: req.body.email });

  if (checkEmailDuplication) return res.send("The email already exist...");
  else {
    const { error } = registerValidation(req.body);

    if (error) {
      res.status(400);
      res.send("Woops nice try dude...");
    } else {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        age: req.body.age,
        gender: req.body.gender,
        sem: req.body.semester,
        branch: req.body.branch,
        weight: req.body.weight,
        bloodtype: req.body.bloodtype,
        healthcon: req.body.healthcon,
      });
      try {
        const saveUser = await user.save();
        res.status(200);
        console.log("Success");
        res.send(`Request Successfull... ${saveUser._id}`);
      } catch (err) {
        console.log(err);
        res.status(400);
        res.send("An error popped up... ");
      }
    }
  }
});

module.exports = router;
