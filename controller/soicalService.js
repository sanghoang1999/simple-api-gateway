const express = require("express");
const router = express.Router();
const apiAdapter = require("../util/apiWraper");
const Auth = require("../util/Auth");
const base_url = "https://asia-east2-social-app-f685d.cloudfunctions.net/api";
const axios = require("axios");
const api = apiAdapter(base_url);
//user service
router.post("/user/login", async (req, res) => {
  try {
    const data = await api.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.post("/user/signup", async (req, res) => {
  try {
    const data = await api.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.post("/user/image", async (req, res) => {
  try {
    const data = await api.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.post("/user/detail", Auth, async (req, res) => {
  try {
    const data = await api.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
router.get("/user/me", Auth, async (req, res) => {
  try {
    const data = await api.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send("SERVER ERROR");
  }
});
router.get("/user/:handle", async (req, res) => {
  try {
    const data = await api.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send("SERVER ERROR");
  }
});
router.post("/user/notifications", Auth, async (req, res) => {
  try {
    const data = await api.post(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
    res.send("SERVER ERROR");
  }
});
router.post("/scream", Auth, async (req, res) => {
  try {
    const data = await api.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/scream", async (req, res) => {
  try {
    const data = await api.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/scream/page/:pageSize/:page", async (req, res) => {
  try {
    const data = await api.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/scream/:screamId", async (req, res) => {
  try {
    const data = await api.get(req.path);
    res.send(data.data);
  } catch (error) {
    res.send(error.response);
    console.log(error);
  }
});
router.post("/scream/:screamId/comment", Auth, async (req, res) => {
  try {
    const data = await api.post(req.path, req.body);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/scream/:screamId/like", Auth, async (req, res) => {
  try {
    const data = await api.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/scream/:screamId/listLike", async (req, res) => {
  try {
    const data = await api.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/scream/:screamId/unlike", Auth, async (req, res) => {
  try {
    const data = await api.get(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});
router.delete("/scream", Auth, async (req, res) => {
  try {
    const data = await api.delete(req.path);
    res.send(data.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
