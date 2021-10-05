const { students } = require("../../infrastructure/database");

const InsertStudents = async (request, response) => {
  try {
    const insertStudents = await students.create({
      id: request.body.id,
      matricula_aluno: request.body.matricula_aluno,
      nome_aluno: request.body.nome_aluno,
      nascimento_aluno: request.body.nascimento_aluno,
      emailaluno: request.body.emailaluno,
    });
    response.status(200).send({
      status: true,
      identificadorStudents: insertStudents.id,
      fullData: insertStudents,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Error Insert Students ", error);
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
  InsertStudents,
};
