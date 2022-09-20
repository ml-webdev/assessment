import patientController from '../controllers/patientController.js'
import express from 'express'

const patientRouter = express.Router()

patientRouter.post('/add', patientController.addPatient)

patientRouter.get('/', patientController.getAllPatients)

patientRouter.get('/:id', patientController.getOnePatient)

patientRouter.put('/:id', patientController.updatePatient)

patientRouter.delete('/:id', patientController.deletePatient)

export default patientRouter
