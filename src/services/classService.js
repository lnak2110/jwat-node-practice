import { classes, increaseCurrentClassId, students } from '../../data.js';

function getClasses() {
  return classes;
}
function getClassById(id) {
  return classes.find((c) => c.id === id);
}

function addClass(classData) {
  classes.push({
    id: increaseCurrentClassId(),
    ...classData,
  });
}

function updateClass(classFound, newClassData) {
  const { id, name } = newClassData;
  classes.forEach((c, i) => c.id === id && (classes[i] = { ...newClassData }));
  students.forEach(
    (s, i) =>
      s.className === classFound.name &&
      (students[i] = { ...s, className: name })
  );
}

function deleteClass(id) {
  classes.splice(
    classes.findIndex((c) => c.id === id),
    1
  );
}

export { getClasses, getClassById, addClass, updateClass, deleteClass };
