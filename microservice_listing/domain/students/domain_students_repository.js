const {
  ListStudents,
  ListStudentsRegistration,
} = require("./domain_list_students");

const find = async () => await ListStudents(resquet, response);
const findRegistration = async () =>
  await ListStudentsRegistration(resquet, response);

module.exports = {
  find,
  findRegistration,
};
