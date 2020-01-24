const express = require("express");

const router = express.Router();
const Resources = require("./resource-model.js");

router.get("/", (req, res) => {
  Resources.getResources().then(result => {
    if (result) res.status(200).json(result);
    else res.status(500).json({ error: "whoopsie" });
  });
});

router.post("/", (req, res) => {
  Resources.addResource(req.body).then(result => {
    if (result) res.status(200).json(result);
    else res.status(500).json({ error: "whoopsie" });
  });
});

module.exports = router;
