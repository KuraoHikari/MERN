import express from "express";
const router = express.Router();

import {
  getPosts,
  updatePosts,
  createPosts,
  deletePosts,
} from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/create", createPosts);
router.post("/update", updatePosts);
router.post("/delete", deletePosts);
export default router;
