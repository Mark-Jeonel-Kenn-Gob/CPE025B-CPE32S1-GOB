// m2cc3.js
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

// Test Code
let student1 = new Student({
  name: "Rafael",
  surname: "Fife",
  email: "rfife@rhyta.com",
});
let student2 = new Student({
  name: "Kelly",
  surname: "Estes",
  email: "k_estes@dayrep.com",
});
let teacher1 = new Teacher({
  name: "Paula",
  surname: "Thompkins",
  email: "PaulaThompkins@jourrapide.com",
});

student1.addCourse("maths", 2);
student1.addCourse("physics", 4);
teacher1.addCourse("maths", 4);

let match = ExtendedUser.match(teacher1, student1);
console.log(match);
teacher1.editCourse("maths", 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match);
teacher1.addCourse("physics", 4);
match = ExtendedUser.match(teacher1, student1, "physics");
console.log(match);
