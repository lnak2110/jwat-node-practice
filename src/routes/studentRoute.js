import express from 'express';
import {
  addStudentController,
  deleteStudentController,
  getStudentByIdController,
  getStudentsByClassController,
  getStudentsByNameController,
  getStudentsController,
  updateStudentController,
} from '../controllers/studentController.js';
import {
  checkFieldValid,
  checkId,
  checkIfClassExistsForStudent,
  checkIfStudentNameExists,
  checkStudentIdExists,
} from '../utils/validation.js';

const studentRoute = express.Router();

studentRoute.get('/', getStudentsController);
// ?keyword=
studentRoute.get('/name', getStudentsByNameController);
studentRoute.get('/class/:className', getStudentsByClassController);
studentRoute.get(
  '/:id',
  checkId,
  checkStudentIdExists,
  getStudentByIdController
);

studentRoute.post(
  '/',
  checkFieldValid('student'),
  checkFieldValid('class', 'className'),
  checkIfStudentNameExists,
  checkIfClassExistsForStudent,
  addStudentController
);

studentRoute.patch(
  '/:id',
  checkId,
  checkStudentIdExists,
  checkFieldValid('student'),
  checkFieldValid('class', 'className'),
  checkIfStudentNameExists,
  checkIfClassExistsForStudent,
  updateStudentController
);

studentRoute.delete(
  '/:id',
  checkId,
  checkStudentIdExists,
  deleteStudentController
);

export default studentRoute;
