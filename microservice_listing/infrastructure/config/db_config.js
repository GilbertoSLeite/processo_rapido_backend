module.exports = {
  HOST: "ec2-52-207-47-210.compute-1.amazonaws.com",
  USER: "odrlbfkvoszzys",
  PASSWORD: "b71e9853957b5687bccd1b2bf727afc977e45778b6b5f0e6f0d9a252a8d1644d",
  DB: "dfcmt6pdfl1p1l",
  dialect: "postgres",
  sslmode: "require",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
