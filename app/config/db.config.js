module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "itd102_db",
    dialect: "mysql",
    pool: {
        mex: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};