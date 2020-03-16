const express = require("express");
const router = express.Router();
const apiAdapter = require("../util/apiWraper");
const Auth = require("../util/Auth");
const base_url = "";

router.get("/test", Auth, (req, res) => {
  res.send(req.path);
});

module.exports = router;
