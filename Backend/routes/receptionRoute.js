const express = require("express");
const router = express.Router();
const db = require('../models/db')


//to get all patients
router.get('/getPatient', (req, res) => {
    const sqlSelect = "SELECT * FROM `patient` WHERE 1"

    try {
        db.query(sqlSelect, (err, result) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send(result)
            }
        })

    } catch (err) {
        res.send(err)
    }

})





//to add patient
router.post('/addPatient', (req, res) => {

    const { firstName, lastName, middleName, sex, age, woreda, keble, phoneNumber, date, spot, cardType, admitted, physician } = req.body

    const sqlInsert = "INSERT INTO `patient`(  `firstName`, `lastName`, `middleName`, `sex`,`age`,`woreda`,`keble`,`phoneNumber`,`date`,`spot`,`cardType`,`admitted`,`physician` ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)"
    try {
        db.query(sqlInsert, [firstName, lastName, middleName, sex, age, woreda, keble, phoneNumber, date, spot, cardType, admitted, physician], (err, result) => {
            if (err)
                res.send(err)
            else
                res.send({ success: 'Registerd successfully!! ' })
        })
    } catch (error) {
        res.send(error)
    }




})





// to update patients table

router.put("/updatePatient/:cardNumber", (req, res) => {

    const cardNumber = req.params.cardNumber;
    const updatePatient = "UPDATE `patient` SET `firstName`=?,`lastName`=?,`middleName`=?,`sex`=?,`age`=?,`woreda`=?,`keble`=?,`phoneNumber`=?,`date`=?,`spot`=?,`cardType`=?,`admitted`=?,`physician`=? WHERE cardNumber=?"

    const { firstName, lastName, middleName, sex, age, woreda, keble, phoneNumber, date, spot, cardType, admitted, physician } = req.body
    try {
        db.query(updatePatient, [firstName, lastName, middleName, sex, age, woreda, keble, phoneNumber, date, spot, cardType, admitted, physician, cardNumber], (err, result) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send({ success: "updated successfully!" })
            }
        })

    }
    catch (error) {
        res.send(error)
    }

})





module.exports = router;

