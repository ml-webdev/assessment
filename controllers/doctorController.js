import db from '../models/index.js'

// create main Model

const Doctor = db.doctors


// 1. create doctor

const addDoctor = async (req, res) => {
    let info = {
        email: req.body.email,
        first: req.body.first,
        last: req.body.last,
    }

    const doctor = await Doctor.create(info)

    res.status(200).send(doctor)
    console.log(doctor)
}

// 2. get all doctors

const getAllDoctors = async (req, res) => {
    let doctors = await Doctor.findAll({})
    res.status(200).send(doctors)
}


// 3. get single doctor
const getOneDoctor = async (req, res) => {

    let id = req.params.id
    let doctor = await Doctor.findOne({   where: {id: id}   })
    res.status(200).send(doctor)
}

// 4. update Doctor

const updateDoctor = async (req, res) => {
    let id = req.params.id
    const doctor = await Doctor.update(req.body, { where: {id: id}})

    res.status(200).send(doctor)
}


// 5. delete Doctor
const deleteDoctor = async (req, res) => {
    let id = req.params.id

    await Doctor.destroy({  where: {id: id}   })
    res.status(200).send("Doctor deleted.")
}

export default {
    addDoctor,
    getAllDoctors,
    getOneDoctor,
    updateDoctor,
    deleteDoctor
}