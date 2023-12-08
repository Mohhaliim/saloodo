const dbConfig = require("../config/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: 3306,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./models/user.model.js")(sequelize, Sequelize.DataTypes);
db.parcels = require("./models/parcel.model.js")(sequelize, Sequelize.DataTypes);


db.parcels.belongsTo(db.users, { foreignKey: 'senderId', as: 'sender' });
db.parcels.belongsTo(db.users, { foreignKey: 'bikerId', as: 'biker', allowNull: true });

module.exports = db;