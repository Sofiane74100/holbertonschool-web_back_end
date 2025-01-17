export default class HolbertonCourse {
    constructor(name, length, students) {
      if (typeof name !== 'string') throw TypeError('name must be a String');
      if (typeof length !== 'number') throw TypeError('length must be a Number');
      if (!Array.isArray(students)) throw TypeError('students must be an Array');
      students.forEach((student) => {
        if (typeof student !== 'string') throw TypeError('student must be a String');
      });
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }
  
    get length() {
      return this._length;
    }
  
    set length(newLength) {
      if (typeof newLength !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = newLength;
    }
  
    get students() {
      return this._students;
    }
  
    set students(newStudents) {
      if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = newStudents;
    }
  }