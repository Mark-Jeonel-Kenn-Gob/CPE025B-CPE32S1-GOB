let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

// --- Provided Functions ---
let showContact = function (contacts, i) {
  if (contacts instanceof Array && contacts[i]) {
    console.log(
      `${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`,
    );
  }
};

let showAllContacts = function (contacts) {
  if (contacts instanceof Array) {
    console.log("\n--- Contact List ---");
    for (let contact of contacts) {
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
  }
};

let addNewContact = function (contacts, name, phone, email) {
  if (contacts instanceof Array && name && phone && email) {
    contacts.push({
      name: name,
      phone: phone,
      email: email,
    });
    console.log("Contact added successfully.");
  }
};

// --- Main Menu Loop with Sorting ---
let isRunning = true;

while (isRunning) {
  let action = prompt("Choose an action: show, all, new, sort, quit");

  if (action === null) break;

  switch (action.toLowerCase().trim()) {
    case "show":
      let index = prompt("Enter contact index:");
      showContact(contacts, parseInt(index));
      break;

    case "all":
      showAllContacts(contacts);
      break;

    case "new":
      let name = prompt("Enter name:"); //67
      let phone = prompt("Enter phone:");
      let email = prompt("Enter email:");
      addNewContact(contacts, name, phone, email);
      break;

    case "sort":
      let sortBy = prompt("Sort by which field? (name, phone, email)");

      if (sortBy === "name" || sortBy === "phone" || sortBy === "email") {
        // Using an arrow function as a callback for the sort method
        contacts.sort((a, b) => {
          // We use bracket notation (a[sortBy]) to dynamically check the chosen property
          if (a[sortBy] > b[sortBy]) {
            return 1;
          } else if (a[sortBy] < b[sortBy]) {
            return -1;
          } else {
            return 0;
          }
        });
        console.log(`\nContacts successfully sorted by ${sortBy}.`);
        showAllContacts(contacts); // Automatically show the newly sorted list
      } else {
        console.log("Invalid sorting field selected.");
      }
      break;

    case "quit":
      isRunning = false;
      console.log("Exiting program.");
      break;

    default:
      console.log("Invalid action.");
      break;
  }
}
