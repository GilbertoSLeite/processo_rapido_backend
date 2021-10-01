const Sequelize = require("sequelize");
const dbConf = require("./db_config");
const { Client } = require("pg");

const client = new Client({
  connectionString: dbConf.HOST,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = new Sequelize(dbConf.DB, dbConf.USER, dbConf.PASSWORD, {
  host: dbConf.HOST,
  dialect: dbConf.dialect,
  operatorsAliases: 0, // Ao invés de usar false ou true usar 0 ou 1
  sslmode: dbConf.sslmode,
  pool: {
    max: dbConf.pool.max,
    min: dbConf.pool.min,
    acquire: dbConf.pool.acquire,
    idle: dbConf.pool.idle,
  },
});
