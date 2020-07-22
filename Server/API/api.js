const express = require("express");
const router = express.Router();
const cors = require("cors");

// @route GET api/
// @desc  Get all users
// @access Public

router.get("/", cors(), require( "./_GET").users);

// @route Get api/user/:id
// @desc  Get a single user
// @access Public
router.get("/user/:id", require( "./_GET").user);

// @route POST api/user
// @desc  Create new user
// @access Public
router.post("/user", require( "./_POST").user);

router.put("/user/:id", require( "./_PUT").user);

// @route DELETE api/user/:id
// @desc  Create new user
// @access Public
router.delete("/user/:id", require( "./_DELETE").user);

module.exports = router;
