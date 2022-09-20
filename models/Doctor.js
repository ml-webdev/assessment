const Doctor = (sequelize, DataTypes) => {
    const Doctor = sequelize.define("doctor", {
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

    Doctor.associate = function(models) {
        Doctor.hasMany(models.Patients)
        Doctor.hasMany(models.Appointments)
    }


    return Doctor
}
export default Doctor