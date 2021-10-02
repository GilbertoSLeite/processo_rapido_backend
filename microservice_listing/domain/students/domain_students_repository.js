const {
  ListStudents,
  ListStudentsRegistration,
} = require("./domain_list_students");

const find = async (resquet, response) => ListStudents(resquet, response);
const findRegistration = async (resquet, response) =>
  ListStudentsRegistration(resquet, response);

module.exports = {
  find,
  findRegistration,
};
