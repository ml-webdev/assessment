const Appointment = (sequelize, DataTypes) => {
    const Appointment = sequelize.define("appointment", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    })

    Appointment.associate = function(models) {
        Appointment.belongsTo(models.Doctor)
        Appointment.belongsTo(models.Patient)
    }

    return Appointment
}

export default Appointment