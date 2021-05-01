const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateExperienceInput(data) {
  let errors = {};
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  if (validator.isEmpty(data.school)) {
    errors.school = "Job title field is required";
  }
  if (validator.isEmpty(data.degree)) {
    errors.degree = "Company field is required";
  }
  if (validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }
  if (validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
