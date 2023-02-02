const express = require("express");
const router = express.Router();
const db = require('../models/db')



//to get specific  patient vital sign by cardNumber
router.get('/getVitalSign/:cardNumber', (req, res) => {

    const cardNumber = req.params.cardNumber;
    const sqlSelect = " SELECT p.* , b.bloodPressure , t.temperature , w.weight , h.height , pu.pulse , o.oxygenSaturation , n.nurseNote  FROM patient p INNER JOIN blood_pressure b ON p.cardNumber = b.cardNumber INNER JOIN temperature t ON b.id_blood_pressure = t.id_temperature INNER JOIN weight w ON b.id_blood_pressure = w.id_weight INNER JOIN height h ON b.id_blood_pressure = h.id_height INNER JOIN pulse pu ON p.cardNumber = pu.id_pulse INNER JOIN oxygen_saturation o ON b.id_blood_pressure = o.id_oxygen_saturation INNER JOIN nurse_note n ON b.id_blood_pressure = n.id_nurse_note WHERE p.cardNumber=?"
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


//to get specific  patient vital sign by cardNumber and date created
router.get('/getVitalSign/:cardNumber/:date', (req, res) => {
    const date = req.params.date;
    const cardNumber = req.params.cardNumber;
    const sqlSelect = " SELECT p.* , b.bloodPressure , t.temperature , w.weight , h.height , pu.pulse , o.oxygenSaturation , n.nurseNote  FROM patient p INNER JOIN blood_pressure b ON p.cardNumber = b.cardNumber INNER JOIN temperature t ON b.id_blood_pressure = t.id_temperature INNER JOIN weight w ON b.id_blood_pressure = w.id_weight INNER JOIN height h ON b.id_blood_pressure = h.id_height INNER JOIN pulse pu ON p.cardNumber = pu.id_pulse INNER JOIN oxygen_saturation o ON b.id_blood_pressure = o.id_oxygen_saturation INNER JOIN nurse_note n ON b.id_blood_pressure = n.id_nurse_note WHERE p.cardNumber=? AND b.date=?"

    try {
        db.query(sqlSelect, [cardNumber, date], (err, result) => {
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


//to get  patients vital sign by date
router.get('/getVitalSign/date/date/:dateValue', (req, res) => {

    const dateValue = req.params.dateValue;
    const sqlSelect = " SELECT p.* , b.bloodPressure , t.temperature , w.weight , h.height , pu.pulse , o.oxygenSaturation , n.nurseNote  FROM patient p INNER JOIN blood_pressure b ON p.cardNumber = b.cardNumber INNER JOIN temperature t ON b.id_blood_pressure = t.id_temperature INNER JOIN weight w ON b.id_blood_pressure = w.id_weight INNER JOIN height h ON b.id_blood_pressure = h.id_height INNER JOIN pulse pu ON p.cardNumber = pu.id_pulse INNER JOIN oxygen_saturation o ON b.id_blood_pressure = o.id_oxygen_saturation INNER JOIN nurse_note n ON b.id_blood_pressure = n.id_nurse_note WHERE b.date=?"

    try {
        db.query(sqlSelect, [dateValue], (err, result) => {

            if (err) {
                res.send("err")
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

    const sqlSelect = " SELECT p.* , b.bloodPressure , t.temperature , w.weight , h.height , pu.pulse , o.oxygenSaturation , n.nurseNote  FROM patient p INNER JOIN blood_pressure b ON p.cardNumber = b.cardNumber INNER JOIN temperature t ON b.id_blood_pressure = t.id_temperature INNER JOIN weight w ON b.id_blood_pressure = w.id_weight INNER JOIN height h ON b.id_blood_pressure = h.id_height INNER JOIN pulse pu ON p.cardNumber = pu.id_pulse INNER JOIN oxygen_saturation o ON b.id_blood_pressure = o.id_oxygen_saturation INNER JOIN nurse_note n ON b.id_blood_pressure = n.id_nurse_note "
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



//getSpecifiC delivery data using  cardNumber
const selectByCard = "SELECT * FROM `delivary` WHERE id_delivary=?";
router.get("/getByCard/:cardNumber", async (req, res) => {
    const cardNumber = req.params.cardNumber;
    try {
        db.query(selectByCard, [cardNumber], (err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    } catch (error) {
        res.json({ message: error });
    }
});

//getSpecifiC delivery data using  delivery id
const selectById = "SELECT * FROM `delivary` WHERE id_delivary=?";
router.get("/getById/:id", async (req, res) => {
    const id = req.params.id;
    try {
        db.query(selectById, [id], (err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    } catch (error) {
        res.json({ message: error });
    }
});

//get all data in Delivary table
const selectAll = "SELECT * FROM `delivary`";
router.get("/getAll", async (req, res) => {
    try {
        db.query(selectAll, (err, result) => {
            if (err) res.send(err);
            else res.send(result);
        });
    } catch (error) {
        res.json({ message: error });
    }
});
//register new delivery
const addDelivery = " INSERT INTO `delivary`(`cardNumber`, `deliveryType`, `maternalStaus`, `obstComplication`, `newBornAlive`, `apgarScore`, `newBornSex`, `weight`, `weightLessThan2500g`, `stillBirth`, `liveBirthandDiedAtorBeforeFaculity`, `vitaminAGivenForMother`, `BCGgiven`, `OPV0given`, `cardNoforNewBorn`, `HIVTestAccepted`, `HIVTestResult`, `HIVPostiveDelivary`, `counseledOnFeedingOptions`, `motherAndNewBornRefferdToChronicCare`, `complication`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

router.post("/addDelivery", async (req, res) => {
    const { cardNumber, deliveryType, maternalStaus, obstComplication, newBornAlive, apgarScore, newBornSex, weight, weightLessThan2500g, stillBirth, liveBirthandDiedAtorBeforeFaculity, vitaminAGivenForMother, BCGgiven, OPV0given, cardNoforNewBorn, HIVTestAccepted, HIVTestResult, HIVPostiveDelivary, counseledOnFeedingOptions, motherAndNewBornRefferdToChronicCare, complication } = req.body;
    try {
        db.query(addDelivery, [cardNumber, deliveryType, maternalStaus, obstComplication, newBornAlive, apgarScore, newBornSex, weight, weightLessThan2500g, stillBirth, liveBirthandDiedAtorBeforeFaculity, vitaminAGivenForMother, BCGgiven, OPV0given, cardNoforNewBorn, HIVTestAccepted, HIVTestResult, HIVPostiveDelivary, counseledOnFeedingOptions, motherAndNewBornRefferdToChronicCare, complication], (err, result) => {
            if (err) res.send(err);
            else res.json({ message: "inserted successfully" });
        });
    } catch (error) {
        res.json({ message: error });
    }
});



module.exports = router;

