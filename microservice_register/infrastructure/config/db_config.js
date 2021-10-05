module.exports = {
  HOST: "ec2-52-22-161-59.compute-1.amazonaws.com",
  DB: "d14tkqm3den25t",
  USER: "gggoevhglzwrlp",
  PASSWORD: "28baf177da038ef25b6a94e7baa2a79b92bb156e9bb919fa9d62ee0379103728",
  ssl: true,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
/*
module.exports = {
  HOST: "ec2-52-22-161-59.compute-1.amazonaws.com",
  DB: "d14tkqm3den25t",
  USER: "gggoevhglzwrlp",
  PASSWORD: "28baf177da038ef25b6a94e7baa2a79b92bb156e9bb919fa9d62ee0379103728",
  dialect: "postgres",
  ssl: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = {
  HOST: "localhost",
  DB: "processorapido",
  USER: "postgres",
  PASSWORD: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
*/
