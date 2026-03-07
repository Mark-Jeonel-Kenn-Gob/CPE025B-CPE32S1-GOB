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

function showContact(list, index) {
  if (list instanceof Array) {
    if (index >= 0 && index < list.length) {
      console.log(
        `${list[index].name} / ${list[index].phone} / ${list[index].email}`,
      );
    } else {
      console.log("Error: Contact index does not exist.");
    }
  } else {
    console.log("Error: The provided list is not an array.");
  }
}

function showAllContacts(list) {
  if (list instanceof Array) {
    console.log("--- All Contacts ---");
    for (let contact of list) {
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
    console.log("--------------------");
  } else {
    console.log("Error: The provided list is not an array.");
  }
}

function addNewContact(list, name, phone, email) {
  if (list instanceof Array && name && phone && email) {
    list.push({
      name: name,
      phone: phone,
      email: email,
    });
    console.log("Contact added successfully!");
  } else {
    console.log(
      "Error: You must provide a valid array and fill in the name, phone, and email.",
    );
  }
}

// 1. Show all initial contacts
console.log("--- Testing showAllContacts ---");
showAllContacts(contacts);

// 2. Show a specific contact (e.g., index 1, which is Raja)
console.log("\n--- Testing showContact ---");
showContact(contacts, 1);
//67
// 3. Add a new contact
console.log("\n--- Testing addNewContact ---");
addNewContact(contacts, "John Doe", "555-1234", "john.doe@example.com");

// 4. Show all contacts again to verify the new one was added
console.log("\n--- Verifying the new contact ---");
showAllContacts(contacts);
