const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const db = require('../models/db');
const dotenv = require('dotenv')

dotenv.config();

// Login route
router.post('/', (req, res) => {
    const { username, password } = req.body;

    // Find the user in the database
    const user = ("SELECT * FROM `staff` WHERE `username`=?")


    db.query(user, [username], (err, result) => {
        if (err) {
            return res.status(401).json({ message: 'error happened' });
        }

        else if (result == '') {
            return res.status(401).json({ message: 'username or password incorrect' });

        }
        else {
            bcrypt.compare(password, result[0].password).then((match) => {
                if (!match) {
                    return res.status(401).json({ message: ' username or password incorrect' });

                }
                else {
                    const token = jwt.sign({
                        id: result[0].id_staff,
                        satffFirstName: result[0].satffFirstName,
                        role: result[0].position
                    }, process.env.SECRET_ACCESS_TOKEN);

                    res.json({ message:"success",token:token });


                }



            });



        }
    });

})




module.exports = router;




