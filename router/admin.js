const express = require("express");
const router = express.Router();
const controller = require("../controller/control");

router.get("/api/get", controller.getUser);

router.get("/api/get/:id", controller.getUserById);

router.post("/api/post", controller.postUser);

router.patch("/api/get/:id", controller.userUpdate);

router.delete("/api/get/:id", controller.deleteUser);

router.get("/api/get", controller.getUser);

router.post("/api/comment/:id", controller.postCommentUser);

router.post("/api/followers/:id", controller.postFollowers);

router.post("/api/likes/:id", controller.postLikes);

module.exports = router;
