const express = require("express");
const router = express.Router();
const db = require('../models/db')


//............................................vital route.......................................


//to get specific  patient vital sign by cardNumber
router.get('/getVitalSign/:cardNumber', (req, res) => {

    const cardNumber = req.params.cardNumber;
    const sqlSelect = "    SELECT p.* , b.bloodPressure , t.temperature , w.weight , h.height , pu.pulse , o.oxygenSaturation , n.nurseNote  FROM patient p INNER JOIN blood_pressure b ON p.cardNumber = b.cardNumber INNER JOIN temperature t ON b.id_blood_pressure = t.id_temperature INNER JOIN weight w ON b.id_blood_pressure = w.id_weight INNER JOIN height h ON b.id_blood_pressure = h.id_height INNER JOIN pulse pu ON b.id_blood_pressure = pu.id_pulse INNER JOIN oxygen_saturation o ON b.id_blood_pressure = o.id_oxygen_saturation INNER JOIN nurse_note n ON b.id_blood_pressure = n.id_nurse_note  WHERE p.cardNumber=?"
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
    const sqlSelect = "    SELECT p.* , b.bloodPressure , t.temperature , w.weight , h.height , pu.pulse , o.oxygenSaturation , n.nurseNote  FROM patient p INNER JOIN blood_pressure b ON p.cardNumber = b.cardNumber INNER JOIN temperature t ON b.id_blood_pressure = t.id_temperature INNER JOIN weight w ON b.id_blood_pressure = w.id_weight INNER JOIN height h ON b.id_blood_pressure = h.id_height INNER JOIN pulse pu ON b.id_blood_pressure = pu.id_pulse INNER JOIN oxygen_saturation o ON b.id_blood_pressure = o.id_oxygen_saturation INNER JOIN nurse_note n ON b.id_blood_pressure = n.id_nurse_note  WHERE p.cardNumber=? AND b.date=?"

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
    const sqlSelect = "  SELECT p.* , b.bloodPressure , t.temperature , w.weight , h.height , pu.pulse , o.oxygenSaturation , n.nurseNote  FROM patient p INNER JOIN blood_pressure b ON p.cardNumber = b.cardNumber INNER JOIN temperature t ON b.id_blood_pressure = t.id_temperature INNER JOIN weight w ON b.id_blood_pressure = w.id_weight INNER JOIN height h ON b.id_blood_pressure = h.id_height INNER JOIN pulse pu ON b.id_blood_pressure = pu.id_pulse INNER JOIN oxygen_saturation o ON b.id_blood_pressure = o.id_oxygen_saturation INNER JOIN nurse_note n ON b.id_blood_pressure = n.id_nurse_note  WHERE b.date=?"

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



//to get all vital info 
router.get('/getVitalSign', (req, res) => {

    const sqlSelect = "SELECT p.* , b.bloodPressure , t.temperature , w.weight , h.height , pu.pulse , o.oxygenSaturation , n.nurseNote  FROM patient p INNER JOIN blood_pressure b ON p.cardNumber = b.cardNumber INNER JOIN temperature t ON b.id_blood_pressure = t.id_temperature INNER JOIN weight w ON b.id_blood_pressure = w.id_weight INNER JOIN height h ON b.id_blood_pressure = h.id_height INNER JOIN pulse pu ON b.id_blood_pressure = pu.id_pulse INNER JOIN oxygen_saturation o ON b.id_blood_pressure = o.id_oxygen_saturation INNER JOIN nurse_note n ON b.id_blood_pressure = n.id_nurse_note  "
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
    const sqlTemperature = "INSERT INTO `temperature`(`id_temperature`,`cardNumber`, `temperature`, `date`) VALUES (?,?,?,?)"
    const sqlHeight = "INSERT INTO `height`(`id_height`, `cardNumber`, `height`, `data`) VALUES (?,?,?,?)"
    const sqlWeight = "INSERT INTO `weight`(`id_weight`,`cardNumber`, `weight`, `date`) VALUES (?,?,?,?)"
    const sqlPulse = "INSERT INTO `pulse`(`id_pulse`,`cardNumber`, `pulse`, `data`) VALUES (?,?,?,?)"
    const sqlOxyegenSaturation = "INSERT INTO `oxygen_saturation`(`id_oxygen_saturation`,`cardNumber`, `oxygenSaturation`, `date`) VALUES (?,?,?,?)"
    const sqlNurseNote = "INSERT INTO `nurse_note`(`id_nurse_note`,`cardNumber`, `nurseNote`, `date`) VALUES (?,?,?,?)"

    if (cardNumber != null && date != null && nurseNote != null && bloodPressure != null && temperature != null && oxygenSaturation != null && pulse != null && weight != null && height != null) {

        db.beginTransaction(function (err) {

            if (err) {
                res.send('error starting transaction: ');
                return;
            } else {
                db.query(sqlBloodPressure, [cardNumber, bloodPressure, date], (error, result) => {
                    if (error) {
                        return db.rollback(function () {
                            res.send('error in blood pressure field: ');
                        });
                    }
                    else {
                        const commonId= result.insertId
                        db.query(sqlTemperature, [commonId,cardNumber, temperature, date], (err, result) => {
                            if (err) {
                                return db.rollback(function () {
                                    res.send('error in temperature feild: ');
                                });
                            }
                            else {
                                db.query(sqlHeight, [commonId,cardNumber, height, date], (err, result) => {
                                    if (err) {
                                        return db.rollback(function () {
                                            res.send('error in height feild: ');
                                        });
                                    }
                                    else {
                                        db.query(sqlWeight, [commonId,cardNumber, weight, date], (err, result) => {
                                            if (err) {
                                                return db.rollback(function () {
                                                    res.send('error in weight feild: ');
                                                });
                                            }
                                            else {
                                                db.query(sqlPulse, [commonId,cardNumber, pulse, date], (err, result) => {
                                                    if (err) {
                                                        return db.rollback(function () {
                                                            res.send('error in pulse feild: ');
                                                        });
                                                    }
                                                    else {
                                                        db.query(sqlOxyegenSaturation, [commonId,cardNumber, oxygenSaturation, date], (err, result) => {
                                                            if (err) {
                                                                return db.rollback(function () {
                                                                    res.send('error in oxyegen saturation feild: ');
                                                                });
                                                            }
                                                            else {
                                                                db.query(sqlNurseNote, [commonId,cardNumber, nurseNote, date], (err, result) => {
                                                                    if (err) {
                                                                        return db.rollback(function () {
                                                                            res.send('error in nurse note feild: ');
                                                                        });
                                                                    }
                                                                    else {
                                                                        db.commit(function (err) {
                                                                            if (err) {
                                                                                return db.rollback(function () {
                                                                                    res.send('error in commit: ');
                                                                                });
                                                                            } else {
                                                                                res.json({ message: 'successfully inserted ' });
                                                                            }
                                                                        })
                                                                    };
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
            }

        })
    } else {
        res.send("fill all fields...")
    }
})


//.....................................................delivery route............................................


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


//------------------------------------family-plan-route---------------------------------------------------


//to add vital info
router.post('/familyPlan/:cardNumber', async (req, res) => {
    const cardNumber = req.params.cardNumber;

    const { date, HIVTestOfferd, HIVTestPerformed, HIVTestResult, HIVSpecificCounslingMethodOfferd, VIAScreenigForWomenAge3049, VIATestResult, CrytherapyGivenForPC, TTStatusChecked, ContradictionForIUCD, PeramnetMethodSelected, ContraceptiveProvided, Remark } = req.body

    const sqlHIVTestOfferd = "INSERT INTO `hiv_test_offerd`(`cardNumber`, `HIVTestOfferd`, `date`)  VALUES (?,?,?)"
    const sqlHIVTestPerformed = "INSERT INTO `hivtestperformed`(`id_HIV_Test_Performed`, `cardNumber`, `HIVTestPerformed`, `date`) VALUES (?,?,?,?)"
    const sqlHIVTestResult = "INSERT INTO `hivtestresult`( `id_HIVTestResult`,`cardNumber`, `HIVTestResult`, `date`)  VALUES (?,?,?,?)"

    const sqlHIVSpecificCounslingMethodOfferd = "INSERT INTO `hivspecificcounslingmethodofferd`(`id_HIV_Specific_Counsling_Method_Offerd`,`cardNumber`, `HIVSpecificCounslingMethodOfferd`, `date`) VALUES (?,?,?,?)"
    const sqlVIAScreenigForWomenAge3049 = "INSERT INTO `viascreenigforwomenage3049`(`id_VIA_Screenig_For_Women_Age_30_49`,`cardNumber`, `VIAScreenigForWomenAge3049`, `date`) VALUES (?,?,?,?)"
    const sqlVIATestResult = "INSERT INTO `viatestresult`( `id_VIATestResult`,`cardNumber`, `VIATestResult`, `date`)  VALUES (?,?,?,?)"

    const sqlCrytherapyGivenForPC = "INSERT INTO `cryotherapygivenforpc`( `id_Cryotherapy_Given_For_PC`,`cardNumber`, `CryotherapyGivenForPC`, `date`) VALUES (?,?,?,?)"
    const sqlTTStatusChecked = "INSERT INTO `ttstatuschecked`(`id_TT_Status_Checked`,`cardNumber`, `TTStatusChecked`, `date`)  VALUES (?,?,?,?)"
    const sqlContradictionForIUCD = "INSERT INTO `contradictionforiucd`(`id_Contradiction_For_IUCD`,  `cardNumber`, `ContradictionForIUCD`, `date`)  VALUES (?,?,?,?)"

    const sqlPeramnetMethodSelected = "INSERT INTO `peramnetmethodselected`(`id_Peramnet_Method_Selected`,`cardNumber`, `PeramnetMethodSelected`, `date`)  VALUES (?,?,?,?)"
    const sqlContraceptiveProvided = "INSERT INTO `contraceptiveprovided`(`id_Contraceptive_Provided`, `cardNumber`, `ContraceptiveProvided`, `date`)  VALUES (?,?,?,?)"
    const sqlRemark = "INSERT INTO `family_plan_remark`(`id_Remark`,`cardNumber`, `Remark`, `date`) VALUES (?,?,?,?)"


    if (cardNumber != null && date != null && HIVTestOfferd != null && HIVTestPerformed != null && HIVTestResult != null && HIVSpecificCounslingMethodOfferd != null && VIAScreenigForWomenAge3049 != null && VIATestResult != null && CrytherapyGivenForPC != null && TTStatusChecked != null && ContradictionForIUCD != null && PeramnetMethodSelected != null && ContraceptiveProvided != null && Remark != null) {

        db.beginTransaction(function (err) {

            if (err) {
                res.send('error starting transaction: ');
                return;
            } else {
                db.query(sqlHIVTestOfferd, [cardNumber, HIVTestOfferd, date], (err, result) => {
                    if (err) {
                        return db.rollback(function () {
                            res.send('error in HIVTestOfferd field: ');
                        });
                    }
                    else {
                        const tablesIdValue = result.insertId
                        db.query(sqlHIVTestPerformed, [tablesIdValue, cardNumber, HIVTestPerformed, date], (err, result) => {
                            if (err) {
                                return db.rollback(function () {
                                    res.send('error in HIVTestPerformed feild: ');
                                });
                            }
                            else { 
                                db.query(sqlHIVTestResult, [tablesIdValue, cardNumber, HIVTestResult, date], (err, result) => {
                                    if (err) {
                                        return db.rollback(function () {
                                            res.send('error in HIVTestResult feild: ');
                                        });
                                    }
                                    else {
                                        db.query(sqlHIVSpecificCounslingMethodOfferd, [tablesIdValue, cardNumber, HIVSpecificCounslingMethodOfferd, date], (err, result) => {
                                            if (err) {
                                                return db.rollback(function () {
                                                    res.send('error in HIVSpecificCounslingMethodOfferd feild: ');
                                                });
                                            }
                                            else {
                                                db.query(sqlVIAScreenigForWomenAge3049, [tablesIdValue, cardNumber, VIAScreenigForWomenAge3049, date], (err, result) => {
                                                    if (err) {
                                                        return db.rollback(function () {
                                                            res.send('error in VIAScreenigForWomenAge3049 feild: ');
                                                        });
                                                    }
                                                    else {
                                                        db.query(sqlVIATestResult, [tablesIdValue, cardNumber, VIATestResult, date], (err, result) => {
                                                            if (err) {
                                                                return db.rollback(function () {
                                                                    res.send('error in VIATestResult feild: ');
                                                                });
                                                            }
                                                            else {
                                                                db.query(sqlCrytherapyGivenForPC, [tablesIdValue, cardNumber, CrytherapyGivenForPC, date], (err, result) => {
                                                                    if (err) {
                                                                        return db.rollback(function () {
                                                                            res.send('error in  CrytherapyGivenForPC feild: ');
                                                                        });
                                                                    }
                                                                    else {
                                                                        db.query(sqlTTStatusChecked, [tablesIdValue, cardNumber, TTStatusChecked, date], (err, result) => {
                                                                            if (err) {
                                                                                return db.rollback(function () {
                                                                                    res.send('error in TTStatusChecked feild: ');
                                                                                });
                                                                            } else {


                                                                                db.query(sqlContradictionForIUCD, [tablesIdValue, cardNumber, ContradictionForIUCD, date], (err, result) => {
                                                                                    if (err) {
                                                                                        return db.rollback(function () {
                                                                                            res.send('error in ContradictionForIUCD feild: ');
                                                                                        });
                                                                                    } else {



                                                                                        db.query(sqlPeramnetMethodSelected, [tablesIdValue, cardNumber, PeramnetMethodSelected, date], (err, result) => {
                                                                                            if (err) {
                                                                                                return db.rollback(function () {
                                                                                                    res.send('error in PeramnetMethodSelected feild: ');
                                                                                                });
                                                                                            } else {

                                                                                                db.query(sqlContraceptiveProvided, [tablesIdValue, cardNumber, ContraceptiveProvided, date], (err, result) => {
                                                                                                    if (err) {
                                                                                                        return db.rollback(function () {
                                                                                                            res.send('error in ContraceptiveProvided feild: ');
                                                                                                        });
                                                                                                    } else {
                                                                                                        db.query(sqlRemark, [tablesIdValue, cardNumber, Remark, date], (err, result) => {
                                                                                                            if (err) {
                                                                                                                return db.rollback(function () {
                                                                                                                    res.send('error in remark  feild: ');
                                                                                                                });
                                                                                                            } else {

                                                                                                                db.commit(function (err) {
                                                                                                                    if (err) {
                                                                                                                        return db.rollback(function () {
                                                                                                                            res.send('error in commit: ');
                                                                                                                        });
                                                                                                                    } else {
                                                                                                                        res.json({ message: 'successfully inserted ' });
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

                                                                    };
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
            }

        })
    } else {
        res.send("fill all fields...")
    }
})



//to get all  family plan 
router.get('/familyPlan', (req, res) => {

    const sqlSelect = "SELECT p.*,b.HIVTestOfferd,COP.ContraceptiveProvided,HSC.HIVSpecificCounslingMethodOfferd,HTP.HIVTestPerformed,HTR.HIVTestResult,VSFW.VIAScreenigForWomenAge3049,VTR.VIATestResult,CTFP.CryotherapyGivenForPC,TT.TTStatusChecked,CIU.ContradictionForIUCD,PMS.PeramnetMethodSelected FROM patient p INNER JOIN hiv_test_offerd b ON p.cardNumber = b.cardNumber INNER JOIN contraceptiveprovided COP ON b.id_HIV_Test_Offerd = COP.id_Contraceptive_Provided INNER JOIN hivspecificcounslingmethodofferd HSC ON b.id_HIV_Test_Offerd = HSC.id_HIV_Specific_Counsling_Method_Offerd INNER JOIN hivtestperformed HTP ON b.id_HIV_Test_Offerd = HTP.id_HIV_Test_Performed INNER JOIN hivtestresult HTR ON b.id_HIV_Test_Offerd = HTR.id_HIVTestResult INNER JOIN viascreenigforwomenage3049 VSFW ON b.id_HIV_Test_Offerd = VSFW.id_VIA_Screenig_For_Women_Age_30_49 INNER JOIN viatestresult VTR ON b.id_HIV_Test_Offerd = VTR.id_VIATestResult INNER JOIN cryotherapygivenforpc CTFP ON b.id_HIV_Test_Offerd=CTFP.id_Cryotherapy_Given_For_PC INNER JOIN ttstatuschecked TT ON b.id_HIV_Test_Offerd=TT.id_TT_Status_Checked INNER JOIN contradictionforiucd CIU ON b.id_HIV_Test_Offerd=CIU.id_Contradiction_For_IUCD INNER JOIN peramnetmethodselected PMS ON b.id_HIV_Test_Offerd=PMS.id_Peramnet_Method_Selected INNER JOIN family_plan_remark FPR ON b.id_HIV_Test_Offerd=FPR.id_Remark "
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

//to get specific family plan by cardNumber

router.get('/familyPlan/:cardNumber', (req, res) => {

    const cardNumber = req.params.cardNumber;
    const sqlSelect = "SELECT p.*,b.HIVTestOfferd,COP.ContraceptiveProvided,HSC.HIVSpecificCounslingMethodOfferd,HTP.HIVTestPerformed,HTR.HIVTestResult,VSFW.VIAScreenigForWomenAge3049,VTR.VIATestResult,CTFP.CryotherapyGivenForPC,TT.TTStatusChecked,CIU.ContradictionForIUCD,PMS.PeramnetMethodSelected FROM patient p INNER JOIN hiv_test_offerd b ON p.cardNumber = b.cardNumber INNER JOIN contraceptiveprovided COP ON b.id_HIV_Test_Offerd = COP.id_Contraceptive_Provided INNER JOIN hivspecificcounslingmethodofferd HSC ON b.id_HIV_Test_Offerd = HSC.id_HIV_Specific_Counsling_Method_Offerd INNER JOIN hivtestperformed HTP ON b.id_HIV_Test_Offerd = HTP.id_HIV_Test_Performed INNER JOIN hivtestresult HTR ON b.id_HIV_Test_Offerd = HTR.id_HIVTestResult INNER JOIN viascreenigforwomenage3049 VSFW ON b.id_HIV_Test_Offerd = VSFW.id_VIA_Screenig_For_Women_Age_30_49 INNER JOIN viatestresult VTR ON b.id_HIV_Test_Offerd = VTR.id_VIATestResult INNER JOIN cryotherapygivenforpc CTFP ON b.id_HIV_Test_Offerd=CTFP.id_Cryotherapy_Given_For_PC INNER JOIN ttstatuschecked TT ON b.id_HIV_Test_Offerd=TT.id_TT_Status_Checked INNER JOIN contradictionforiucd CIU ON b.id_HIV_Test_Offerd=CIU.id_Contradiction_For_IUCD INNER JOIN peramnetmethodselected PMS ON b.id_HIV_Test_Offerd=PMS.id_Peramnet_Method_Selected INNER JOIN family_plan_remark FPR ON b.id_HIV_Test_Offerd=FPR.id_Remark WHERE p.cardNumber=?"
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




//to get specific family plan by cardNumber and date created
router.get('/familyPlan/:cardNumber/:date', (req, res) => {
    const date = req.params.date;
    const cardNumber = req.params.cardNumber;
    const sqlSelect = "SELECT p.*,b.HIVTestOfferd,COP.ContraceptiveProvided,HSC.HIVSpecificCounslingMethodOfferd,HTP.HIVTestPerformed,HTR.HIVTestResult,VSFW.VIAScreenigForWomenAge3049,VTR.VIATestResult,CTFP.CryotherapyGivenForPC,TT.TTStatusChecked,CIU.ContradictionForIUCD,PMS.PeramnetMethodSelected FROM patient p INNER JOIN hiv_test_offerd b ON p.cardNumber = b.cardNumber INNER JOIN contraceptiveprovided COP ON b.id_HIV_Test_Offerd = COP.id_Contraceptive_Provided INNER JOIN hivspecificcounslingmethodofferd HSC ON b.id_HIV_Test_Offerd = HSC.id_HIV_Specific_Counsling_Method_Offerd INNER JOIN hivtestperformed HTP ON b.id_HIV_Test_Offerd = HTP.id_HIV_Test_Performed INNER JOIN hivtestresult HTR ON b.id_HIV_Test_Offerd = HTR.id_HIVTestResult INNER JOIN viascreenigforwomenage3049 VSFW ON b.id_HIV_Test_Offerd = VSFW.id_VIA_Screenig_For_Women_Age_30_49 INNER JOIN viatestresult VTR ON b.id_HIV_Test_Offerd = VTR.id_VIATestResult INNER JOIN cryotherapygivenforpc CTFP ON b.id_HIV_Test_Offerd=CTFP.id_Cryotherapy_Given_For_PC INNER JOIN ttstatuschecked TT ON b.id_HIV_Test_Offerd=TT.id_TT_Status_Checked INNER JOIN contradictionforiucd CIU ON b.id_HIV_Test_Offerd=CIU.id_Contradiction_For_IUCD INNER JOIN peramnetmethodselected PMS ON b.id_HIV_Test_Offerd=PMS.id_Peramnet_Method_Selected INNER JOIN family_plan_remark FPR ON b.id_HIV_Test_Offerd=FPR.id_Remark WHERE p.cardNumber=? AND b.date=?"

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




module.exports = router;

