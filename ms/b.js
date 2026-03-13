function getInventoryValuation(inventory) {
  return inventory.reduce((acc, item) => {
    if (item.qty > 0) {
      acc[item.category] = (acc[item.category] || 0) + item.qty * item.price;
    }
    return acc;
  }, {});
}

// Test Code
const testInventory = [
  { name: "Monitor", qty: 2, price: 200, category: "Tech" },
  { name: "Mouse", qty: 0, price: 50, category: "Tech" },
  { name: "Desk", qty: 1, price: 300, category: "Furniture" },
  { name: "Lamp", qty: 2, price: 50, category: "Furniture" },
];
console.log(getInventoryValuation(testInventory));
