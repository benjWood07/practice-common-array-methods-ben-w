// Café Order Tracking System

// Task 1: Create the Order System
let orders = [
    ["Latte", "Tea", "Espresso"],           // Row 0: Drink orders
    ["Croissant", "Muffin", "Bagel"]        // Row 1: Pastry orders
];

console.log('Order system created with drinks and pastries');
console.log('Orders array:', orders);

// Task 2: Log the number of drinks and pastries using .length
console.log('Number of drinks:', orders[0].length);
console.log('Number of pastries:', orders[1].length);

// Task 3: Access Orders Using Bracket Notation (hardcoded numbers)
console.log('First drink:', orders[0][0]);    // Combination 1: First drink and first pastry
console.log('First pastry:', orders[1][0]);

console.log('Second drink:', orders[0][1]);    // Combination 2: Second drink and last pastry
console.log('Last pastry:', orders[1][2]);

console.log('Last drink:', orders[0][2]);     // Combination 3: Last drink and second pastry
console.log('Second pastry:', orders[1][1]);

// Task 4: Access Orders Dynamically with Variables
let categoryIndex = 0;  // Drinks category
let itemIndex = 1;      // Second item
console.log('Selected order (using variables):', orders[categoryIndex][itemIndex]);

// Change variables for different selection
categoryIndex = 1;      // Pastries category
itemIndex = 0;          // First item
console.log('Selected order (using variables):', orders[categoryIndex][itemIndex]);

// Task 5: Loop through all drinks using .length
console.log('All drink orders:');
for (let i = 0; i < orders[0].length; i++) {
    console.log('Drink ' + (i + 1) + ':', orders[0][i]);
}

// Task 6: Add New Order & Track Length
console.log('Number of drinks before adding:', orders[0].length);

// Add "Flat White" to drinks category
orders[0].push("Flat White");

console.log('New drink added: Flat White');
console.log('Number of drinks after adding:', orders[0].length);
console.log('Updated drinks array:', orders[0]);

/*
console.log('Total categories:', orders.length); // I was trying to show the complete updated order system
console.log('Drinks (' + orders[0].length + ' items):', orders[0]);
console.log('Pastries (' + orders[1].length + ' items):', orders[1]);
*/