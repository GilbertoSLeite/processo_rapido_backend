const router = require("express").Router();

const StudentsControllers = require("../../controllers/students/controllers_students");

module.exports = (app) => {
  router.post("/", StudentsControllers.insertStudents);

  // Criando API
  app.use("/aluno/cadastrar", router);
};
