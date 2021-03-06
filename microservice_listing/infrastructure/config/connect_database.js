const Sequelize = require("sequelize");
const { Client } = require("pg");
const dbConf = require("./db_config");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    ssl: true,
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = new Sequelize(dbConf.DB, dbConf.USER, dbConf.PASSWORD, {
  host: dbConf.HOST,
  dialect: dbConf.dialect,
  operatorsAliases: 0, // Ao invés de usar false ou true usar 0 ou 1
  ssl: dbConf.ssl,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max: dbConf.pool.max,
    min: dbConf.pool.min,
    acquire: dbConf.pool.acquire,
    idle: dbConf.pool.idle,
  },
});
