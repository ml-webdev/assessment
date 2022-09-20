import db from '../models/index.js'

// create main Model

const Patient = db.patients


// 1. create patient

const addPatient = async (req, res) => {
    let info = {
        email: req.body.email,
        first: req.body.first,
        last: req.body.last,
    }

    const patient = await Patient.create(info)

    res.status(200).send(patient)
    console.log(patient)
}

// 2. get all patient

const getAllPatients = async (req, res) => {
    let patients = await Patient.findAll({})
    res.status(200).send(patients)
}


// 3. get single patient
const getOnePatient = async (req, res) => {

    let id = req.params.id
    let patient = await Patient.findOne({   where: {id: id}   })
    res.status(200).send(patient)
}

// 4. update Patient

const updatePatient = async (req, res) => {
    let id = req.params.id
    const patient = await Patient.update(req.body, { where: {id: id}})

    res.status(200).send(patient)
}


// 5. delete Patient
const deletePatient = async (req, res) => {
    let id = req.params.id

    await Patient.destroy({  where: {id: id}   })
    res.status(200).send("Patient deleted.")
}

export default {
    addPatient,
    getAllPatients,
    getOnePatient,
    updatePatient,
    deletePatient
}