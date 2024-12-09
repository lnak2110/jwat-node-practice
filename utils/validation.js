import { classes, students } from '../data.js';
import { getClassById } from '../services/classService.js';
import {
  getStudentById,
  getStudentsByClass,
} from '../services/studentService.js';
import { responseConflict, resonseFail, responseNotFound } from './response.js';

function checkClassIdExists(req, res, next) {
  const { id } = req.params;
  const classFound = getClassById(+id);

  if (!classFound) {
    responseNotFound(res);
    return;
  }

  req.classFound = classFound;
  next();
}

function checkStudentIdExists(req, res, next) {
  const { id } = req.params;
  const studentFound = getStudentById(+id);

  if (!studentFound) {
    responseNotFound(res);
    return;
  }

  req.studentFound = studentFound;
  next();
}

function checkFieldValid(entity, field = 'name') {
  return function (req, res, next) {
    const value = req.body[field];
    if (value !== null && value !== undefined && value?.trim() !== '') {
      next();
    } else {
      resonseFail(res, `Invalid ${entity} name!`);
    }
  };
}

function checkIfClassNameExists(req, res, next) {
  const { id } = req.params;
  const { name } = req.body;
  const classFound = classes.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );

  if (!classFound || +id === classFound?.id) {
    next();
  } else {
    responseConflict(res, 'Class name already exists!');
  }
}

function checkIfStudentNameExists(req, res, next) {
  const { id } = req.params;
  const { name } = req.body;
  const studentFound = students.find(
    (s) => s.name.toLowerCase() === name.toLowerCase()
  );

  if (!studentFound || +id === studentFound?.id) {
    next();
  } else {
    responseConflict(res, 'Student name already exists!');
  }
}

function checkIfClassExistsForStudent(req, res, next) {
  const { className } = req.body;
  const classFound = classes.find(
    (c) => c.name.toLowerCase() === className.toLowerCase()
  );
  if (classFound) {
    req.body.className = classFound.name;
    next();
  } else {
    resonseFail(res, 'Class name does not exist!');
  }
}

function checkClassEmpty(req, res, next) {
  const { id, name } = req.classFound;
  const studentsInClass = getStudentsByClass(name);

  if (!studentsInClass.length) {
    next();
  } else {
    resonseFail(
      res,
      `Delete class by id ${id} failed! There are students in the class.`
    );
  }
}

export {
  checkClassIdExists,
  checkStudentIdExists,
  checkFieldValid,
  checkIfClassNameExists,
  checkIfStudentNameExists,
  checkIfClassExistsForStudent,
  checkClassEmpty,
};
