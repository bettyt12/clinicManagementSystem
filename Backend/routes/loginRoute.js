const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../models/db");
const dotenv = require("dotenv");
const authenticate = require("../middleware/authenticate");
dotenv.config();

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = "SELECT * FROM `staff` WHERE `username`=?";

  db.query(user, [username], (err, result) => {
    if (err) {
      return res.status(401).json({ message: "error happened" });
    } else if (result == "") {
      return res
        .status(401)
        .json({ message: "username or password incorrect" });
    } else {
      bcrypt.compare(password, result[0].password).then((match) => {
        if (!match) {
          res
            .status(401)
            .json({ success: false, message: "Invalid username or password" });
        } else {
         
          const token = jwt.sign(
            {
              id: result[0].id_staff,
              staffFirstName: result[0].satffFirstName,
              staffLastName: result[0].staffLastName,
              role: result[0].position,
            },
            process.env.SECRET_ACCESS_TOKEN,
            { expiresIn: "6hr" }
          );
          res.cookie("token", token, { httpOnly: false, sameSite: "strict" });
          res
            .status(200)
            .json({ success: true, message: "Logged in successfully" });
        }
      });
    }
  });
});

// Logout route
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ success: true, message: 'Logged out successfully' });
});



module.exports = router;
