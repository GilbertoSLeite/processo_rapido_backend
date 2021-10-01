const {
  ListStudents,
} = require("../../../application/business_rules/students/list_students/getStudents");

module.exports = {
  async findStudents() {
    ListStudents.find;
  },
  async findStudentsRegistration() {
    ListStudents.findRegistration;
  },
};
