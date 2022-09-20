const config = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'root',
    DB: 'patient_portal',
    dialect: 'mysql',

    pool: {
        max: 5, 
        min: 0,
        acquire: 3000,
        idle: 10000
    }
}

export default config;