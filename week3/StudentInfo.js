// Defining student information
const dateofBirth = "12/12/1980";
const getStudentName = () => {
  return "John Doe";
};
const getCampusName = () => {
  return "UEL Campus";
};
const StudentGrade = (marks) => {
  return marks > 50 && marks < 70 ? "B grade" : "A grade";
};

// Exporting functions and variables
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;
exports.Studentgrade = StudentGrade;
