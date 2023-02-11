const express = require("express");
const router = express.Router();
const db = require('../models/db');



//to insert in to appoitment
const sqlInsert = "INSERT INTO `appointment`( `cardNumber`, `appointmentDate`, `appointmentTime`, `physician`, `appointmentReason`, `date`) VALUES (?,?,?,?,?,?)"
router.post('/', (req, res) => {

    const { cardNumber, appointmentDate, appointmentTime, physician, appointmentReason, date } = req.body

    db.query(sqlInsert, [cardNumber, appointmentDate, appointmentTime, physician, appointmentReason, date], (err, result) => {
        if (err)
            res.send(err)
        else
            res.json({ message: "data inserted successfully" })
    })

})


//to get all appoitments
sqlGet = "SELECT pa.*,st.userName as physicianName,ap.* from patient pa INNER JOIN appointment ap on pa.cardNumber=ap.cardNumber INNER JOIN staff st on st.id_staff=ap.physician"
router.get('/', (req, res) => {
    db.query(sqlGet, (err, result) => {
        if (err)
            res.send(err)
        else
            res.send(result)
    })
})

//to get by cardNumber
sqlGetByCardNum = "SELECT pa.*,st.userName as physicianName,ap.* from patient pa INNER JOIN appointment ap on pa.cardNumber=ap.cardNumber INNER JOIN staff st on st.id_staff=ap.physician WHERE pa.cardNumber=?"
router.get('/:cardNumber', (req, res) => {

    const cardNumber = req.params.cardNumber
    db.query(sqlGetByCardNum, [cardNumber], (err, result) => {
        if (err)
            res.send(err)
        else
            res.send(result)
    })
})


//to get by appitmentDate only
sqlGetByAppoitmentDate = "SELECT pa.*,st.userName as physicianName,ap.* from patient pa INNER JOIN appointment ap on pa.cardNumber=ap.cardNumber INNER JOIN staff st on st.id_staff=ap.physician WHERE ap.appointmentDate=?"
router.get('/date/:dateValue', (req, res) => {

    const dateValue = req.params.dateValue
    db.query(sqlGetByAppoitmentDate, [dateValue], (err, result) => {
        if (err)
            res.send(err)
        else
            res.send(result)
    })
})


//to get by cardnumber and appoitmentDate
sqlGetByBoth = "SELECT pa.*,st.userName as physicianName,ap.* from patient pa INNER JOIN appointment ap on pa.cardNumber=ap.cardNumber INNER JOIN staff st on st.id_staff=ap.physician WHERE pa.cardNumber=? AND ap.appointmentDate=?"
router.get('/:cardNumber/:date', (req, res) => {
    const cardNumber = req.params.cardNumber
    const date = req.params.date

    db.query(sqlGetByBoth, [cardNumber, date], (err, result) => {
        if (err)
            res.send(err)
        else
            res.send(result)
    })
})


//to get by pysician

sqlGetByPhsycian = "SELECT pa.*,st.userName as physicianName,ap.* from patient pa INNER JOIN appointment ap on pa.cardNumber=ap.cardNumber INNER JOIN staff st on st.id_staff=ap.physician WHERE st.id_staff=?"
router.get('/physician/phy/:pysicianId', (req, res) => {

    const pysicianId = req.params.pysicianId

    db.query(sqlGetByPhsycian, [pysicianId], (err, result) => {
        if (err)
            res.send(err)
        else
            res.send(result)
    })
})





module.exports = router;



