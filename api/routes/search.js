const express = require("express");
const Search = require("../model/Search");

const { registerValidation } = require("../validation/searchValidation");

const router = express.Router();

// router.post("/search", async (req, res)) => {
//   const checkMatching = await Search.findOne({
//     branch: req.body.branch,
//     bloodtype: req.body.bloodtype,
//   }, function(err, res) {
//     if (err) {
//         res.send(err);
//         console.log(err);
//     } else {
//         res.send(res);
//         console.log(res);
//     }
//   });
// },

router.post("/search", async (req, res) => {
  const checkMatching = await Search.findOne(
    {
      branch: req.body.branch,
      bloodtype: req.body.bloodtype,
    },
    function (res, err) {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    }
  );
});

module.exports = router;
