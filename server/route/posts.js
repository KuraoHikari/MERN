import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("run,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
});

export default router;
