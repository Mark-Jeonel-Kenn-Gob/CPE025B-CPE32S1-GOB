class User {
  #firstName;
  #lastName;
  #email;

  constructor(firstName, lastName, email) {
    this.firstName = firstName; // Calls setter
    this.lastName = lastName; // Calls setter
    this.email = email; // Calls setter
  }

  get firstName() {
    return this.#firstName;
  }
  set firstName(val) {
    if (/^[A-Z][a-zA-Z]*$/.test(val)) this.#firstName = val;
    else throw new Error("Invalid first name format");
  }

  get lastName() {
    return this.#lastName;
  }
  set lastName(val) {
    if (/^[A-Z][a-zA-Z]*$/.test(val)) this.#lastName = val;
    else throw new Error("Invalid last name format");
  }

  get email() {
    return this.#email;
  }
  set email(val) {
    if (/^[a-zA-Z]+(\.[a-zA-Z]+)*@[a-zA-Z]+(\.[a-zA-Z]+)*$/.test(val))
      this.#email = val;
    else throw new Error("Invalid email format");
  }
}

// Test Code
try {
  let user1 = new User("Aaaa", "Bbbb", "Aaaa@gmail.com");
  console.log(user1);
  let user2 = new User("aaaa", "Bbbb", "Aaaa@gmail.com"); // -> Error
} catch (err) {
  console.log(err.message);
}
