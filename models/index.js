// This is our sequelize file
import Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import config from '../dbConfig/config.js'

import Appointment from "./Appointment.js"
import Doctor from "./Doctor.js"
import Patient from "./Patient.js"

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Connection succeeded.')
})
.catch(err => {
    console.log(`There was an error: ${err}`)
})

// Export the db Object
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// Appointment
// Doctor
// Patient(sequelize, DataTypes)

db.appointments = Appointment(sequelize, DataTypes)
console.log(db.appointments)

db.doctors = Doctor(sequelize, DataTypes)
console.log(db.doctors)

db.patients = Patient(sequelize, DataTypes)
console.log(db.patients)

// db.appointments.belongsTo(db.doctors)
// db.appointments.belongsTo(db.patients)
// db.doctors.hasMany(db.patients)
// db.doctors.hasMany(db.appointments)
// db.patients.hasMany(db.doctors)
// db.patients.hasMany(db.appointments)



db.sequelize.sync({force: false}).then(() => {
    console.log('Re-sync done!')
})
export default db
