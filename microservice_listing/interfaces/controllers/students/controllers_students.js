const {
  ListStudents,
} = require("../../../application/business_rules/students/list_students/getStudents");

module.exports = {
  async findStudents(resquet, response) {
    ListStudents.find(resquet, response);
  },
  async findStudentsRegistration(resquet, response) {
    ListStudents.findRegistration(resquet, response);
  },
};
