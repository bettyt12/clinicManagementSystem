const express = require("express");
const router = express.Router();
const db = require("../models/db");

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
