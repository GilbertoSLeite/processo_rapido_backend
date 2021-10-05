const {
  InsertStudents,
} = require("../../../application/business_rules/students/insert_students/insertStudents");

module.exports = {
  async insertStudents(resquet, response) {
    InsertStudents.insert(resquet, response);
  },
};
