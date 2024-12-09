import {
  addStudent,
  deleteStudent,
  getStudents,
  getStudentsByClass,
  getStudentsByName,
  updateStudent,
} from '../services/studentService.js';
import {
  responseCreatedSuccess,
  responseNotFound,
  responseSuccess,
} from '../utils/response.js';

function getStudentsController(_req, res) {
  responseSuccess(res, 'Get all students successfully!', getStudents());
}

function getStudentByIdController(req, res) {
  const { id } = req.params;
  const studentFound = req.studentFound;
  responseSuccess(res, `Get student by id ${id} successfully!`, studentFound);
}

function getStudentsByNameController(req, res) {
  const { keyword } = req.query;
  const students = getStudentsByName(keyword);

  if (!students.length) {
    responseNotFound(res);
    return;
  }

  responseSuccess(
    res,
    `Get students by name ${keyword} successfully!`,
    students
  );
}

function getStudentsByClassController(req, res) {
  const { className } = req.params;
  const students = getStudentsByClass(className);

  if (!students.length) {
    responseNotFound(res);
    return;
  }

  responseSuccess(
    res,
    `Get student by class name ${className} successfully!`,
    students
  );
}

function addStudentController(req, res) {
  const studentData = req.body;
  responseCreatedSuccess(
    res,
    'Add a new student successfully!',
    addStudent(studentData)
  );
}

function updateStudentController(req, res) {
  const { id } = req.params;
  const studentData = req.body;

  updateStudent({ id: +id, ...studentData });
  responseSuccess(res, `Update student by id ${id} successfully!`);
}

function deleteStudentController(req, res) {
  const { id } = req.params;
  deleteStudent(+id);
  responseSuccess(res, `Delete student by id ${id} successfully!`);
}

export {
  getStudentsController,
  getStudentByIdController,
  getStudentsByNameController,
  getStudentsByClassController,
  addStudentController,
  updateStudentController,
  deleteStudentController,
};
