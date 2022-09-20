const Patient =  (sequelize, DataTypes) => {
    const Patient = sequelize.define("patient", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        first: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Patient.associate = function(models) {
        Patient.hasMany(models.Doctor)
        Patient.hasMany(models.Appointment)
    }



    return Patient
}

export default Patient