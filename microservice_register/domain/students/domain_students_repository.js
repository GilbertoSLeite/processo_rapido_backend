const { InsertStudents } = require("./domain_insert_students");

const insert = async (resquet, response) => InsertStudents(resquet, response);

module.exports = {
  insert,
};
