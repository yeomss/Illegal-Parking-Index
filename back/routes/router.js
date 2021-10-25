const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const signup = require("./signup");
const login = require("./login");

router.get("/", (req, res) => {
  console.log("router contact");
});

router.use("/signup", signup);
router.use("/login", login);

module.exports = router;
