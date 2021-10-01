const Sequelize = require("sequelize");
const { Client } = require("pg");
const dbConf = require("./db_config");

const client = new Client({
  connectionString:
    "postgres://gggoevhglzwrlp:28baf177da038ef25b6a94e7baa2a79b92bb156e9bb919fa9d62ee0379103728@ec2-52-22-161-59.compute-1.amazonaws.com:5432/d14tkqm3den25t",
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
