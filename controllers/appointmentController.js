import db from '../models/index.js'

// create main Model

const Appointment = db.appointments


// 1. create Appointment

const addAppointment = async (req, res) => {
    let info = {
        date: req.body.date,
        time: req.body.time,
    }

    const appointment = await Appointment.create(info)

    res.status(200).send(appointment)
    console.log(appointment)
}

// 2. get all appointments

const getAllAppointments = async (req, res) => {
    let appointments = await Appointment.findAll({})
    res.status(200).send(appointments)
}
// 3. get single appointment

const getOneAppointment = async (req, res) => {

    let id = req.params.id
    let appointments = await Appointment.findOne({   where: {id: id}   })
    res.status(200).send(appointments)
}

// 4. update Appointment

const updateAppointment = async (req, res) => {
    let id = req.params.id
    const appointment = await Appointment.update(req.body, { where: {id: id}})

    res.status(200).send(appointment)
}


// 5. delete Product

const deleteAppointment = async (req, res) => {
    let id = req.params.id

    await Appointment.destroy({  where: {id: id}   })
    res.status(200).send("Appointment deleted.")
}

export default {
    addAppointment,
    getAllAppointments,
    getOneAppointment,
    updateAppointment,
    deleteAppointment
}