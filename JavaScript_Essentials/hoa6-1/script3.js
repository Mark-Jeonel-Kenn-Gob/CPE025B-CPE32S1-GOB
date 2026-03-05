let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let isRunning = true;

while (isRunning) {
    let action = prompt("What would you like to do? Type 'first', 'last', 'all', 'new', or 'quit':");

    if (action === null) {
        break; 
    }

    switch (action) {
        case "first":
            console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
            break;

        case "last":
            let lastIndex = contacts.length - 1;
            console.log(`${contacts[lastIndex].name} / ${contacts[lastIndex].phone} / ${contacts[lastIndex].email}`);
            break;

        case "all":
            console.log("--- All Contacts ---");
            for (let contact of contacts) {
                console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
            }
            console.log("--------------------");
            break;

        case "new":
            let newName = prompt("Enter the new contact's name:");
            let newPhone = prompt("Enter the new contact's phone number:");
            let newEmail = prompt("Enter the new contact's email address:");

            if (newName && newPhone && newEmail) {
                contacts.push({
                    name: newName,
                    phone: newPhone,
                    email: newEmail
                });
                console.log("Contact added successfully!");
            } else {
                console.log("Error: You must provide a name, phone, and email. Contact not added.");
            }
            break;

        case "quit":
            isRunning = false;
            console.log("Exiting the program. Goodbye!");
            break;

        default:
            console.log("Invalid option selected. Please try again.");
            break;
    }
}

