let currentStudentId = 0;
let currentClassId = 0;

// { id: 1, name: 'Anna', className: '1A' }
const students = [];

// { id: 1, name: '1A' }
const classes = [];

function increaseCurrentStudentId() {
  return ++currentStudentId;
}

function increaseCurrentClassId() {
  return ++currentClassId;
}

export { students, classes, increaseCurrentStudentId, increaseCurrentClassId };
