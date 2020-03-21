const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiAdapter = require("../util/apiWraper");
const Auth = require("../util/Auth");
const base_url = "https://sanghoang-notifications-sv.herokuapp.com";
const api = apiAdapter(base_url);

router.get("/notifications", Auth, async (req, res) => {
  try {
    const data = await axios.get(base_url + req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post("/notifications", Auth, async (req, res) => {
  try {
    const data = await axios.post(base_url + req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.delete("/notifications/:notis_id", Auth, async (req, res) => {
  try {
    const data = await axios.delete(base_url + req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
module.exports = router;
