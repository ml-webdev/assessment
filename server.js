import express from "express"
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config()
import appointmentRouter from './routes/appointmentRouter.js'
import doctorRouter from './routes/doctorRouter.js'
import patientRouter from './routes/patientRouter.js'

const app = express()

var corsOptions = {
    origin: process.env.CORS_ORIGIN
}

// middleware
app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/appointments', appointmentRouter)
app.use('/patients', patientRouter)
app.use('/doctors', doctorRouter)

// router
// app.use('portal/appointments', router)

// testing api

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the patient scheduling portal.'})
})



// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} `)
})