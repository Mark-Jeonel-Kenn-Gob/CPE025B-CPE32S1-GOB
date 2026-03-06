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
    let action = prompt("Contact Manager\n\nChoose an option:\n- show\n- all\n- add\n- search\n- quit");

    if (action === null) {
        continue; 
    }

    switch (action.toLowerCase().trim()) {
        case "show":
            let indexInput = prompt("Enter the index number of the contact to show:");
            
            if (indexInput === null) continue;
            
            let index = parseInt(indexInput);
            
            if (!isNaN(index) && index >= 0 && index < contacts.length) {
                alert(`Contact at index ${index}:\nName: ${contacts[index].name}\nPhone: ${contacts[index].phone}\nEmail: ${contacts[index].email}`);
            } else {
                alert("Error: Contact index does not exist."); 
            }
            break;

        case "all":
            let allContactsList = "--- All Contacts ---\n";
            for (let i = 0; i < contacts.length; i++) {
                allContactsList += `[${i}] ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}\n`;
            }
            alert(allContactsList);
            break;

        case "add":
            let newName = prompt("Enter the new contact's Name:");
            if (newName === null) continue; 
            
            let newPhone = prompt("Enter the new contact's Phone:");
            if (newPhone === null) continue;
            
            let newEmail = prompt("Enter the new contact's Email:");
            if (newEmail === null) continue;

            if (newName.trim() !== "" && newPhone.trim() !== "" && newEmail.trim() !== "") {
                contacts.push({
                    name: newName,
                    phone: newPhone,
                    email: newEmail
                });
                alert("Contact added successfully!");
            } else {
                alert("Error: You must fill in the Name, Phone, and Email. Contact not added.");
            }
            break; //67

        case "search":
            let searchName = prompt("Enter the exact name of the contact you want to search for:");
            
            if (searchName === null) continue;

            let found = false;
            
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].name.toLowerCase() === searchName.toLowerCase()) {
                    alert(`Contact Found:\nPhone: ${contacts[i].phone}\nEmail: ${contacts[i].email}`); 
                    found = true;
                    break; 
                }
            }
            

            if (!found) {
                alert("Contact not found");
            }
            break;

        case "quit":
            isRunning = false;
            alert("Exiting the Contact Manager. Goodbye!");
            break;

        default:
            alert("Invalid option. Please type 'show', 'all', 'add', 'search', or 'quit'.");
            break;
    }
}

