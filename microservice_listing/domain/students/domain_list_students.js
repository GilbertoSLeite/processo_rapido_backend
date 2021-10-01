const students = require("../../infrastructure/database").students;

const ListStudents = async (request, response) => {
  try {
    const listStudents = await students.findAll({
      order: [["id", "ASC"]],
    });
    response.status(200).send({
      status: true,
      fullData: listStudents,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error Students ", error);
    response.status(404).send({
      status: Boolean(false),
      errorDetail: error.parent,
      errorFull: error,
      errorCode: response.statusCode,
      errorMessage: response.statusMessage,
    });
  }
};

const ListStudentsRegistration = async (request, response) => {
  try {
    const listStudentsMatricula = await students.findAll({
      where: {
        matricula_aluno: {
          matricula_aluno: request.params.matricula_aluno,
        },
      },
    });
    response.status(200).send({
      status: true,
      fullData: listStudentsMatricula,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error Students Matrícula", error);
    response.status(404).send({
      status: Boolean(false),
      errorDetail: error.parent,
      errorFull: error,
      errorCode: response.statusCode,
      errorMessage: response.statusMessage,
    });
  }
};

module.exports = {
  ListStudents,
  ListStudentsRegistration,
};
