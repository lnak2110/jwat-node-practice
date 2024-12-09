import express from 'express';
import {
  addClassController,
  deleteClassController,
  getClassByIdController,
  getClassesController,
  updateClassController,
} from '../controllers/classController.js';
import {
  checkClassEmpty,
  checkClassIdExists,
  checkFieldValid,
  checkIfClassNameExists,
} from '../utils/validation.js';

const classRoute = express.Router();

classRoute.get('/', getClassesController);
classRoute.get('/:id', checkClassIdExists, getClassByIdController);

classRoute.post(
  '/',
  checkFieldValid('class'),
  checkIfClassNameExists,
  addClassController
);

classRoute.patch(
  '/:id',
  checkClassIdExists,
  checkFieldValid('class'),
  checkIfClassNameExists,
  updateClassController
);

classRoute.delete(
  '/:id',
  checkClassIdExists,
  checkClassEmpty,
  deleteClassController
);

export default classRoute;
