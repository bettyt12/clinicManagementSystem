const express = require("express");
const router = express.Router();
const db = require('../models/db');
const bcrypt = require('bcrypt');// to encrypt the password

const roles=require('../config/roles')
const authenticate = require('../middleware/authenticate')
const authorize = require('../middleware/authorize')


//get all staff

//if we want authorize and authenticate 
// router.get('/getStaff', authenticate, authorize([roles.admin]),(req, res) => {
 
 router.get('/getStaff',(req, res) => {

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
router.post('/addStaff', async (req, res) => {

    const { satffFirstName, staffLastName, password, userName, position, phoneNumber } = req.body
    
    const checkUsername = "SELECT * FROM `staff` WHERE userName=?"
    const sqlInsert = "INSERT INTO `staff`( `satffFirstName`, `staffLastName`, `password`, `userName`, `position`, `phoneNumber`) VALUES (?,?,?,?,?,?)"


    try {

        db.query(checkUsername, [userName], (err, result) => {
            if (err) {
                res.send({ error: 'error happened!' })
            }
            else if (result.length > 0) {
                res.send({ error: 'username already existed!' })
            }
            else {

                bcrypt.hash(password, 10).then((hashedPassword) => {
                    db.query(sqlInsert, [satffFirstName, staffLastName, hashedPassword, userName, position, phoneNumber], (err, result) => {
                        if (err)
                            res.send(err)
                        else
                            res.send({ success: 'Registerd successfully!! ' })
                    })

                })
            }
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