module.exports = (sequelize, DataTypes) => {
  const TableStudents = sequelize.define("alunos_processo_rapido", {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    matricula_aluno: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "Dados da Matrícula do Aluno.",
    },
    nome_aluno: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      comment: "Nome do Aluno.",
    },
    nascimento_aluno: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      comment: "Data do Nascimento do Aluno.",
    },
    emailaluno: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "E-Mail do Aluno.",
    },
  });
  return TableStudents;
};
