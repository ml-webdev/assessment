import appointmentController from '../controllers/appointmentController.js'
import express from 'express'


const appointmentRouter = express.Router()

appointmentRouter.post('/add', appointmentController.addAppointment)

appointmentRouter.get('/', appointmentController.getAllAppointments)

appointmentRouter.get('/:id', appointmentController.getOneAppointment)

appointmentRouter.put('/:id', appointmentController.updateAppointment)

appointmentRouter.delete('/delete/:id', appointmentController.deleteAppointment)

export default appointmentRouter
