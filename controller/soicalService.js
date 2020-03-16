const express = require("express");
const router = express.Router();
const apiAdapter = require("../util/apiWraper");
const Auth = require("../util/Auth");
const axios = require("axios");
// const base_url = "https://asia-east2-social-app-f685d.cloudfunctions.net/api";
axios.defaults.baseURL =
  "http://localhost:5000/social-app-f685d/asia-east2/api";
//user service
router.post("/user/login", async (req, res) => {
  try {
    const data = await axios.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.post("/user/signup", async (req, res) => {
  try {
    const data = await axios.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.post("/user/image", async (req, res) => {
  try {
    const data = await axios.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.post("/user/detail", Auth, async (req, res) => {
  try {
    const data = await axios.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.get("/user/me", Auth, async (req, res) => {
  try {
    const data = await axios.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.get("/user/:handle", async (req, res) => {
  try {
    const data = await axios.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send("SERVER ERROR");
  }
});
router.post("/user/notifications", Auth, async (req, res) => {
  try {
    const data = await axios.post(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send("SERVER ERROR");
  }
});
router.post("/scream", Auth, async (req, res) => {
  try {
    const data = await axios.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/scream", async (req, res) => {
  try {
    const data = await axios.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/scream/page/:pageSize/:page", async (req, res) => {
  try {
    const data = await axios.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/scream/:screamId", async (req, res) => {
  try {
    const data = await axios.get(req.path);
    res.send(data.data);
  } catch (error) {
    res.send(error.response);
    console.log(error);
  }
});
router.post("/scream/:screamId/comment", Auth, async (req, res) => {
  try {
    const data = await axios.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/scream/:screamId/like", Auth, async (req, res) => {
  try {
    const data = await axios.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/scream/:screamId/listLike", async (req, res) => {
  try {
    const data = await axios.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/scream/:screamId/unlike", Auth, async (req, res) => {
  try {
    const data = await axios.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.delete("/scream", Auth, async (req, res) => {
  try {
    const data = await axios.delete(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
