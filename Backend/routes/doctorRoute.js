const express = require("express");
const router = express.Router();
const db = require('../models/db');
const bcrypt = require('bcrypt');// to encrypt the password

//get all patient
router.get('/getpatient', (req, res) => {
    const sqlSelect = "SELECT * FROM `patient` admitted='false'"

    try {
        db.query(sqlSelect, (err, result) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send(result)
            }
        })
    } catch (error) {
        res.send(error)
    }

})

//get all admitted patient
router.get('/getdmittedpatient', (req, res) => {
    const sqlSelect = "SELECT * FROM `patient` WHERE admitted='true' "

    try {
        db.query(sqlSelect, (err, result) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send(result)
            }
        })
    } catch (error) {
        res.send(error)
    }

})

//