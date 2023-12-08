module.exports = {
    host: "database", //localhost if on local
    username: "root",
    password: "1234", //enter you db password if on local
    database: "saloodo",
    port: "3306",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
