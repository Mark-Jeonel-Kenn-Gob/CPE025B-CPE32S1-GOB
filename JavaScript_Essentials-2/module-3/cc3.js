class Users {
  constructor() {
    this.collection = new Map();
  }

  add(firstName, lastName, email) {
    try {
      let newUser = new User(firstName, lastName, email);
      this.collection.set(email, newUser);
    } catch (err) {
      console.log(err.message);
    }
  }

  delete(email) {
    this.collection.delete(email);
  }

  get(email) {
    return this.collection.get(email);
  }

  getAll(sortBy) {
    let usersArray = Array.from(this.collection.values());
    let fieldMap = { name: "firstName", surname: "lastName", email: "email" };
    let actualField = fieldMap[sortBy] || sortBy;

    return usersArray.sort((a, b) =>
      a[actualField].localeCompare(b[actualField]),
    );
  }
}

// Test Code
let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com"); // Replaces previous due to Map key
users.add("Xxxx", "Oooo", "dddd@gmail.com");

console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map((u) => u.firstName));
console.log(users.getAll("surname").map((u) => u.lastName));
console.log(users.getAll("email").map((u) => u.email));
