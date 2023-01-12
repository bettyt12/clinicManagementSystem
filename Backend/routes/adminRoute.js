const express = require("express");
const router = express.Router();
const db = require('../models/db');
const bcrypt = require('bcrypt');// to encrypt the password



//get all staff
router.get('/getStaff', (req, res) => {
    const sqlSelect = "SELECT * FROM `staff` WHERE 1"

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



//to add staff
router.post('/addStaff', (req, res) => {

    const { satffFirstName, staffLastName, password, userName, position, phoneNumber } = req.body

    const sqlInsert = "INSERT INTO `staff`( `satffFirstName`, `staffLastName`, `password`, `userName`, `position`, `phoneNumber`) VALUES (?,?,?,?,?,?)"
    try {
        bcrypt.hash(password, 10).then((hashedPassword) => {
            db.query(sqlInsert, [satffFirstName, staffLastName, hashedPassword, userName, position, phoneNumber], (err, result) => {
                if (err)
                    res.send(err)
                else
                    res.send({ success: 'Registerd successfully!! ' })
            })

        })

    } catch (error) {
        res.send(error)
    }



})

//to add service

router.post('/addService', (req, res) => {

    const { name, description, price, date } = req.body

    const sqlInsert = "INSERT INTO `service`( `name`, `description`, `price`, `date`) VALUES (?,?,?,?)"

    try {
        db.query(sqlInsert, [name, description, price, date], (err, result) => {
            if (err)
                res.send(err)
            else
                res.send({ success: 'Registerd successfully!! ' })
        })

    } catch (error) {
        res.send(error)
    }




})


module.exports = router;