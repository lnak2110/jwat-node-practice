import { increaseCurrentStudentId, students } from '../data.js';

function getStudents() {
  return students;
}

function getStudentById(id) {
  return students.find((s) => s.id === id);
}

function getStudentsByName(keyword) {
  return students.filter(
    (s) => s.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0
  );
}

function getStudentsByClass(className) {
  return students.filter(
    (s) => s.className.toLowerCase() === className.toLowerCase()
  );
}

function addStudent(studentData) {
  students.push({
    id: increaseCurrentStudentId(),
    ...studentData,
  });
}

function updateStudent(studentData) {
  const { id } = studentData;
  students.forEach((s, i) => s.id === id && (students[i] = { ...studentData }));
}

function deleteStudent(id) {
  students.splice(
    students.findIndex((s) => s.id === id),
    1
  );
}

export {
  getStudents,
  getStudentById,
  getStudentsByName,
  getStudentsByClass,
  addStudent,
  updateStudent,
  deleteStudent,
};
