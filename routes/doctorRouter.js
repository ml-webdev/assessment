import doctorController from '../controllers/doctorController.js'
import express from 'express'


const doctorRouter = express.Router()

doctorRouter.post('/add', doctorController.addDoctor)

doctorRouter.get('/', doctorController.getAllDoctors)

doctorRouter.get('/:id', doctorController.getOneDoctor)

doctorRouter.put('/:id', doctorController.updateDoctor)

doctorRouter.delete('/:id', doctorController.deleteDoctor)

export default doctorRouter
