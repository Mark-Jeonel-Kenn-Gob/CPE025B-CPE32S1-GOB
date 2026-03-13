// m2cc5.js
const send = (from, to, message) => {
  console.log(`${from.email} -> ${to.email}: ${message}`);
};

class User {
  constructor({ name, surname, email, role }) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this.courses = [];
    this.messages = [];
  }
  addCourse(course, level) {
    this.courses.push({ course, level });
  }
  removeCourse(course) {
    this.courses = this.courses.filter((c) => c.course !== course);
  }
  editCourse(course, level) {
    let found = this.courses.find((c) => c.course === course);
    if (found) found.level = level;
  }
  sendMessage(to, message) {
    send(this, to, message);
    this.messages.push({ from: this.email, to: to.email, message });
  }
  showMessagesHistory() {
    this.messages.forEach((m) =>
      console.log(`${m.from} -> ${m.to}: ${m.message}`),
    );
  }
}

class ExtendedUser extends User {
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }

  static match(teacher, student, courseName = null) {
    if (courseName) {
      let sCourse = student.courses.find((c) => c.course === courseName);
      let tCourse = teacher.courses.find((c) => c.course === courseName);
      if (sCourse && tCourse && tCourse.level >= sCourse.level) {
        return { course: courseName, level: sCourse.level };
      }
      return undefined;
    } else {
      return student.courses
        .filter((sc) =>
          teacher.courses.some(
            (tc) => tc.course === sc.course && tc.level >= sc.level,
          ),
        )
        .map((sc) => ({ course: sc.course, level: sc.level }));
    }
  }
}

class Student extends ExtendedUser {
  constructor({ name, surname, email }) {
    super({ name, surname, email, role: "student" });
  }
}

class Teacher extends ExtendedUser {
  constructor({ name, surname, email }) {
    super({ name, surname, email, role: "teacher" });
  }
}

class Tutoring {
  constructor() {
    this.students = [];
    this.teachers = [];
  }
  addStudent(name, surname, email) {
    this.students.push(new Student({ name, surname, email }));
  }
  addTeacher(name, surname, email) {
    this.teachers.push(new Teacher({ name, surname, email }));
  }
  getStudentByName(name, surname) {
    return this.students.find((s) => s.name === name && s.surname === surname);
  }
  getTeacherByName(name, surname) {
    return this.teachers.find((t) => t.name === name && t.surname === surname);
  }
  getStudentsForTeacher(teacher) {
    return this.students.filter(
      (s) => ExtendedUser.match(teacher, s).length > 0,
    );
  }
  getTeacherForStudent(student) {
    return this.teachers.filter(
      (t) => ExtendedUser.match(t, student).length > 0,
    );
  }
}

class ExtendedTutoring extends Tutoring {
  sendMessages(from, toList, message) {
    for (let user of toList) {
      if (user instanceof User) {
        from.sendMessage(user, message);
      }
    }
  }
}

// Test Code
let tutoring = new ExtendedTutoring();
tutoring.addStudent("Rafael", "Fife", "rfife@rhyta.com");
tutoring.addStudent("Kelly", "Estes", "k_estes@dayrep.com");
tutoring.addTeacher("Paula", "Thompkins", "PaulaThompkins@jourrapide.com");

let to = [];
to.push(tutoring.getStudentByName("Rafael", "Fife"));
to.push(tutoring.getStudentByName("Kelly", "Estes"));

tutoring.sendMessages(
  tutoring.getTeacherByName("Paula", "Thompkins"),
  to,
  "test message",
);

for (let user of to) {
  user.showMessagesHistory();
}
