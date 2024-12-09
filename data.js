let currentStudentId = 1;
let currentClassId = 1;

const students = [{ id: 1, name: 'Anna', className: '1A' }];

const classes = [{ id: 1, name: '1A' }];

function increaseCurrentStudentId() {
  return ++currentStudentId;
}

function increaseCurrentClassId() {
  return ++currentClassId;
}

export { students, classes, increaseCurrentStudentId, increaseCurrentClassId };
