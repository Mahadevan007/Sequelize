module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Mysql@12",
  DB: "testdb2_many_to_many",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
