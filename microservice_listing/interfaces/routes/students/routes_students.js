const router = require("express").Router();

const StudentsControllers = require("../../controllers/students/controllers_students");

module.exports = (app) => {
  router.get("/", StudentsControllers.findStudents);
  router.get("/:matricula_aluno", StudentsControllers.findStudentsRegistration);

  //Criando API
  app.use("/aluno/listar", router);
};
