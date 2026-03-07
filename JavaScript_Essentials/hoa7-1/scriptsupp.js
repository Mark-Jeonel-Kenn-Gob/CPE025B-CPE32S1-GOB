let contacts = [
  {
    name: "Linus Torvalds",
    role: "System Admin",
    skills: ["Linux", "Git", "Kernels"],
    availability: true,
  },
  {
    name: "Ada Lovelace",
    role: "Logic Analyst",
    skills: ["Algorithms", "Math", "Analytics"],
    availability: false,
  },
  {
    name: "Alan Turing",
    role: "Cryptographer",
    skills: ["Logic", "Enigma", "Security"],
    availability: true,
  },
];

// 1. The Persistent Loop
while (true) {
  // 2. The Interaction Menu
  let action = prompt(
    "Global Tech Support Directory\n\nChoose an action: show, all, add, search, quit",
  );

  // Handle cancel button to prevent errors
  if (action === null) {
    continue;
  }

  action = action.toLowerCase().trim();

  // 3. Completion: Exit the loop using break
  if (action === "quit") {
    alert("Goodbye!");
    break;
  }

  switch (action) {
    case "show":
      let indexStr = prompt("Enter the index number of the contact:");
      if (indexStr === null) break;

      let index = parseInt(indexStr);

      // Validate index & show name, role, and first skill
      if (!isNaN(index) && index >= 0 && index < contacts.length) {
        alert(
          `Name: ${contacts[index].name}\nRole: ${contacts[index].role}\nFirst Skill: ${contacts[index].skills[0]}`,
        );
      } else {
        alert("Error: Invalid index.");
      }
      break;

    case "all":
      // Display name of every contact in list
      let allNames = "--- All Contacts ---\n";
      for (let i = 0; i < contacts.length; i++) {
        allNames += `[${i}] ${contacts[i].name}\n`;
      }
      alert(allNames);
      break;
    //67
    case "add":
      // Prompt for Name, Role, and a Skill
      let newName = prompt("Enter Name:");
      let newRole = prompt("Enter Role:");
      let newSkill = prompt("Enter a single Skill:");

      // Ensure no field is empty
      if (
        newName &&
        newRole &&
        newSkill &&
        newName.trim() !== "" &&
        newRole.trim() !== "" &&
        newSkill.trim() !== ""
      ) {
        // Only push if all data is there
        contacts.push({
          name: newName,
          role: newRole,
          skills: [newSkill],
          availability: true, // Defaulting new contacts to available
        });
        alert("New contact added successfully!");
      } else {
        alert("Error: Name, Role, and Skill cannot be empty.");
      }
      break;

    case "search":
      // Prompt user for a Name and loop to find it
      let searchName = prompt("Enter the exact Name to search:");
      if (searchName === null) break;

      let found = false;
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name.toLowerCase() === searchName.toLowerCase()) {
          // Display Role and "Available" or "Busy" based on boolean
          let status = contacts[i].availability ? "Available" : "Busy";
          alert(`Found Contact:\nRole: ${contacts[i].role}\nStatus: ${status}`);
          found = true;
          break;
        }
      }

      if (!found) {
        alert("Contact not found.");
      }
      break;

    default:
      alert("Invalid option. Please try again.");
      break;
  }
}
