const express = require("express");
const router = express.Router();
const db = require('../models/db')



//to get specific  patient vital sign by cardNumber
router.get('/getVitalSign/:cardNumber', (req, res) => {

    const cardNumber = req.params.cardNumber;
    const sqlSelect = "SELECT p.* , b.bloodPressure , t.temperature , w.weight , h.height , pu.pulse , o.oxygenSaturation , n.nurseNote  FROM patient p INNER JOIN blood_pressure b ON p.cardNumber = b.cardNumber INNER JOIN temperature t ON p.cardNumber = t.cardNumber INNER JOIN weight w ON p.cardNumber = w.cardNumber  INNER JOIN height h ON p.cardNumber = h.cardNumber INNER JOIN pulse pu ON p.cardNumber = pu.cardNumber INNER JOIN oxygen_saturation o ON p.cardNumber = o.cardNumber INNER JOIN nurse_note n ON p.cardNumber = n.cardNumber WHERE p.cardNumber=?"

    try {
        db.query(sqlSelect, [cardNumber], (err, result) => {
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




//to get all  patients with its vital info
router.get('/getVitalSign', (req, res) => {

    const sqlSelect = "SELECT p.* , b.bloodPressure , t.temperature , w.weight , h.height , pu.pulse , o.oxygenSaturation , n.nurseNote  FROM patient p INNER JOIN blood_pressure b ON p.cardNumber = b.cardNumber INNER JOIN temperature t ON p.cardNumber = t.cardNumber INNER JOIN weight w ON p.cardNumber = w.cardNumber  INNER JOIN height h ON p.cardNumber = h.cardNumber INNER JOIN pulse pu ON p.cardNumber = pu.cardNumber INNER JOIN oxygen_saturation o ON p.cardNumber = o.cardNumber INNER JOIN nurse_note n ON p.cardNumber = n.cardNumber"

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



//to add vital info
router.post('/addVitalSign/:cardNumber', async (req, res) => {
    const cardNumber = req.params.cardNumber;

    const { date, nurseNote, height, bloodPressure, temperature, oxygenSaturation, pulse, weight } = req.body

    const sqlBloodPressure = "INSERT INTO `blood_pressure`(`cardNumber`, `bloodPressure`, `date`) VALUES (?,?,?)"
    const sqlTemperature = "INSERT INTO `temperature`(`cardNumber`, `temperature`, `date`) VALUES (?,?,?)"
    const sqlHeight = "INSERT INTO `height`( `cardNumber`, `height`, `data`) VALUES (?,?,?)"
    const sqlWeight = "INSERT INTO `weight`(`cardNumber`, `weight`, `date`) VALUES (?,?,?)"
    const sqlPulse = "INSERT INTO `pulse`(`cardNumber`, `pulse`, `data`) VALUES (?,?,?)"
    const sqlOxyegenSaturation = "INSERT INTO `oxygen_saturation`(`cardNumber`, `oxygenSaturation`, `date`) VALUES (?,?,?)"
    const sqlNurseNote = "INSERT INTO `nurse_note`(`cardNumber`, `nurseNote`, `date`) VALUES (?,?,?)"

    const checkCardPresent = "SELECT `cardNumber` FROM `blood_pressure` WHERE `cardNumber` =?";

    try {

               await db.query(sqlBloodPressure, [cardNumber, bloodPressure, date], (err, result) => {
                    if (err) {
                        res.send(err)
                    }
                    else {
                        db.query(sqlTemperature, [cardNumber, temperature, date], (err, result) => {
                            if (err) {
                                res.send(err)
                            }
                            else {
                                db.query(sqlHeight, [cardNumber, height, date], (err, result) => {
                                    if (err) {
                                        res.send(err)
                                    }
                                    else {
                                        db.query(sqlWeight, [cardNumber, weight, date], (err, result) => {
                                            if (err) {
                                                res.send(err)
                                            }
                                            else {
                                                db.query(sqlPulse, [cardNumber, pulse, date], (err, result) => {
                                                    if (err) {
                                                        res.send(err)
                                                    }
                                                    else {
                                                        db.query(sqlOxyegenSaturation, [cardNumber, oxygenSaturation, date], (err, result) => {
                                                            if (err) {
                                                                res.send(err)
                                                            }
                                                            else {
                                                                db.query(sqlNurseNote, [cardNumber, nurseNote, date], (err, result) => {
                                                                    if (err) {
                                                                        res.send(err)
                                                                    }
                                                                    else {
                                                                        res.send({ success: 'Registerd successfully!! ' })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })

                    }
                })

         



    } catch (error) {
        res.send(error)
    }

})


module.exports = router;

