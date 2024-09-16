/*
3.Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.
*/

let storeInventory = {
    "Laptop": 1000,
    "Smartphone": 500,
    "Tablet": 300,
    "Headphones": 50,
    "Charger": 20
};

const exchangeRate = 80; // 1 USD = 80 INR

let inventoryInRupees = Object.fromEntries(
    Object.entries(storeInventory).map(([item, priceInUSD]) => [item, priceInUSD * exchangeRate])
);

console.log(inventoryInRupees);
