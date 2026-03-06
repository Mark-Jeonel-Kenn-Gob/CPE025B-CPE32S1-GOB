class Vehicle {
  constructor(id, type) {
    // Code here!
    this.id = id;
    this.type = type;
    this.isDeployed = false;
  }
}

class FleetManager {
  constructor() {
    // Code here!
    this.vehicles = [];
  }

  addVehicle(vehicle) {
    // Code here!
    this.vehicles.push(vehicle);
  }

  deployVehicle(id) {
    // Code here!
    const targetVehicle = this.vehicles.find((v) => v.id === id);
    if (targetVehicle) {
      targetVehicle.isDeployed = true;
    } else {
      return undefined;
    }
  }

  getAvailableVehicles() {
    // Code here!
    return this.vehicles.filter((v) => v.isDeployed === false);
  }
}

// Test Entity Instantiation
console.log("*** Test Entity Instantiation***");
const testVehicle = new Vehicle("V01", "Truck");
console.log(testVehicle);
// Expect Vehicle object with id: V01, type: Truck, isDeployed: false

// Test Composition and Insertion
console.log("\n*** Test Composition and Insertion***");
const fleet = new FleetManager();
fleet.addVehicle(testVehicle);
fleet.addVehicle(new Vehicle("V02", "Van"));
fleet.addVehicle(new Vehicle("V03", "Drone"));
console.log(fleet.vehicles.length);
// Expect: 3

// Test State Mutation
console.log("\n*** Test State Mutation ***");
fleet.deployVehicle("V02");
const deployedVehicle = fleet.vehicles.find((v) => v.id === "V02");
console.log(deployedVehicle.isDeployed);
// Expect: true

// Test Data Filtering
console.log("\n*** Test Data Filtering ***");
const available = fleet.getAvailableVehicles();
console.log(available.length);
// Expect: 2
console.log(available.map((v) => v.id));
// Expect: [ 'V01', 'V03' ]

//67
