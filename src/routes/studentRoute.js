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
  checkIfClassExistsForStudent,
  checkIfStudentNameExists,
  checkStudentIdExists,
} from '../utils/validation.js';

const studentRoute = express.Router();

studentRoute.get('/', getStudentsController);
studentRoute.get('/name', getStudentsByNameController);
studentRoute.get('/class/:className', getStudentsByClassController);
studentRoute.get('/:id', checkStudentIdExists, getStudentByIdController);

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
  checkStudentIdExists,
  checkFieldValid('student'),
  checkFieldValid('class', 'className'),
  checkIfStudentNameExists,
  checkIfClassExistsForStudent,
  updateStudentController
);

studentRoute.delete('/:id', checkStudentIdExists, deleteStudentController);

export default studentRoute;
