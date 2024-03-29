const express = require("express");
const router = express.Router();
const db = require('../models/db')
const authenticate=require('../middleware/authenticate')

//to insert medication
router.post("/addMedication/:cardNumber", (req, res) => {
    const cardNumber = req.params.cardNumber
    const { medication, date ,doze,remark} = req.body
    const sqlInsert = "INSERT INTO `medication`( `cardNumber`, `medication`,  `doze`, `remark`,`date`) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [cardNumber, medication,doze,remark,date], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.json({ message: "inserted successfully!" })
        }
    })

})


//to get all meditation

router.get('/getMedictation', (req, res) => {


    const sqlSelect = " SELECT p.* ,  m.*  FROM patient p INNER JOIN medication m ON p.cardNumber = m.cardNumber"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})




//to get meditation by cardNumber

router.get('/getMeditation/:cardNumber', (req, res) => {

    const cardNumber = req.params.cardNumber

    const sqlSelect = " SELECT p.* ,  m.*  FROM patient p INNER JOIN medication m ON p.cardNumber = m.cardNumber WHERE m.cardNumber=?"
    db.query(sqlSelect, [cardNumber], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})


//to get meditation by date and cardNumber

router.get('/getMeditation/:cardNumber/:dateValue', (req, res) => {

    const dateValue = req.params.dateValue
    const cardNumber = req.params.cardNumber

    const sqlSelect = " SELECT p.* ,  m.*  FROM patient p INNER JOIN medication m ON p.cardNumber = m.cardNumber WHERE p.cardNumber=? AND m.date=?"
    db.query(sqlSelect, [cardNumber,dateValue], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})


// to insert in to chef-compiant, hpi and progress-note table

router.post('/addVitals/:cardNumber', (req, res) => {

    const cardNumber = req.params.cardNumber;
    const { chefCompliant, progressNote, hpi, date } = req.body

    const sqlChiefCompliant = "INSERT INTO `chef_compliant`(`cardNumber`, `chefCompliant`, `date`) VALUES (?,?,?)"
    const sqlProgressNote = "INSERT INTO `progress_note`(`cardNumber`, `progressNote`, `date`) VALUES (?,?,?)"
    const sqlHpi = "INSERT INTO `hpi`(`cardNumber`, `hpi`, `date`) VALUES (?,?,?)"

    if (chefCompliant || progressNote || hpi) {

        // to insert to chief-complient table
        if (chefCompliant != null) {
            db.query(sqlChiefCompliant,
                [cardNumber, chefCompliant, date],
                (error, result) => {
                    if (error) throw error;
                }
            )
        };

        //to insert progress-note table
        if (progressNote != null) {

            db.query(sqlProgressNote,
                [cardNumber, progressNote, date],
                (error, result) => {
                    if (error) throw error;
                }
            )
        };

        //to insert hpi table
        if (hpi != null) {
            db.query(sqlHpi,
                [cardNumber, hpi, date],
                (error, result) => {
                    if (error) throw error;
                }
            )
        };

        res.json({ message: "Data inserted successfully" })
    }
    else {
        res.json({ message: "no data is sent" })
    }
})


//to get all patient vital
router.get('/getVitals', (req, res) => {
    const sqlSelect = "SELECT pa.*, pn.progressNote, cc.chefCompliant, h.hpi FROM patient pa INNER JOIN progress_note pn ON pa.cardNumber = pn.cardNumber INNER JOIN chef_compliant cc ON pn.id_progress_note = cc.id_chef_compliant INNER JOIN hpi h ON pn.id_progress_note = h.id_hpi"
    try {
        db.query(sqlSelect, (err, result) => {
            if (err)
                res.send(err)
            else
                res.send(result)
        })

    } catch (err) {
        res.send(err)
    }

})

//to get patient by cardNumber patient vital
router.get('/getVitals/:cardNumber', (req, res) => {

    const cardNumber = req.params.cardNumber;
    const sqlSelect = "SELECT pa.*, pn.progressNote, cc.chefCompliant, h.hpi FROM patient pa INNER JOIN progress_note pn ON pa.cardNumber = pn.cardNumber INNER JOIN chef_compliant cc ON pn.id_progress_note = cc.id_chef_compliant INNER JOIN hpi h ON pn.id_progress_note = h.id_hpi WHERE pa.cardNumber=?"
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

//to get by date and cardnumber patient vital

router.get('/getVitals/:cardNumber/:date', (req, res) => {
      const cardNumber = req.params.cardNumber;

    const date = req.params.date;
    const sqlSelect = "SELECT pa.*, pn.progressNote, cc.chefCompliant, h.hpi FROM patient pa INNER JOIN progress_note pn ON pa.cardNumber = pn.cardNumber INNER JOIN chef_compliant cc ON pn.id_progress_note = cc.id_chef_compliant INNER JOIN hpi h ON pn.id_progress_note = h.id_hpi WHERE pa.cardNumber= ? AND pn.date=?"
    try {
        db.query(sqlSelect, [cardNumber,date], (err, result) => {
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


module.exports = router;


