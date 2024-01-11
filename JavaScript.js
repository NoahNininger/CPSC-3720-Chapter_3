// 1. Create an array to hold an inventory of store items.
const inventory = [];

/* 
    2. Create three items, each having the properties of name, 
       model, cost, and quantity.
*/
const item1 = {
    name: "Laptop",
    model: "Lenovo ThinkPad",
    cost: 1499.99,
    quantity: 10
};

const item2 = {
    name: "Gaming Console",
    model: "Nintendo Switch OLED",
    cost: 349.99,
    quantity: 10
};

const item3 = {
    name: "Headphones",
    model: "Apple AirPod Pros",
    cost: 249.00,
    quantity: 10
};

/*
    3. Add all three objects to the main array using an array 
       method, and then log the inventory array to the console.
*/
inventory.push(item1, item2, item3);
console.log("Inventory:", inventory);

/* 
    4. Access the quantity element of your third item, and 
       log it to the console.
*/
console.log("Quantity of Third Item:", inventory[2].quantity);

// Experiment by adding and accessing more elements within your data structure.
const item4 = {
  name: "Laptop",
  model: "MacBook Pro",
  cost: 1499.99,
  quantity: 5
};

const item5 = {
    name: "Gaming Console",
    model: "Nintendo Switch Lite",
    cost: 199.99,
    quantity: 15
};

const item6 = {
    name: "Headphones",
    model: "Beats by Dre",
    cost: 149.99,
    quantity: 20
};

// repeating steps 3 & 4
inventory.push(item4, item5, item6);
console.log("Inventory:", inventory);
console.log("Quantity of Sixth Item:", inventory[5].quantity);