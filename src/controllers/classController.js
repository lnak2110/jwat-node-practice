import {
  addClass,
  deleteClass,
  getClasses,
  updateClass,
} from '../services/classService.js';
import { responseCreatedSuccess, responseSuccess } from '../utils/response.js';

function getClassesController(_req, res) {
  responseSuccess(res, 'Get all classes successfully!', getClasses());
}

function getClassByIdController(req, res) {
  const { id } = req.params;
  const classFound = req.classFound;
  responseSuccess(res, `Get class by id ${id} successfully!`, classFound);
}

function addClassController(req, res) {
  const classData = req.body;
  responseCreatedSuccess(
    res,
    'Add a new class successfully!',
    addClass(classData)
  );
}

function updateClassController(req, res) {
  const { id } = req.params;
  const newClassData = req.body;
  const classFound = req.classFound;

  updateClass(classFound, { id: +id, ...newClassData });
  responseSuccess(res, `Update class by id ${id} successfully!`);
}

function deleteClassController(req, res) {
  const { id } = req.params;
  deleteClass(+id);
  responseSuccess(res, `Delete class by id ${id} successfully!`);
}

export {
  getClassesController,
  getClassByIdController,
  addClassController,
  updateClassController,
  deleteClassController,
};
