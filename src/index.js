/*
 ***********************************************
 * This is the driver code. Don't change it!!!
 ***********************************************
 */

const orders = [
    'Regular Electronics:100:2 Books:20:1',
    'Member Clothing:50:4',
    'VIP Electronics:100:1 Clothing:50:2',
    'Gold Books:20:1',
    'Regular Toys:30:2',
];

// Replace with process.argv.slice(2) in actual usage
const args = [];

if (args.length === 0) {
    console.log('Arguments are required to run the program.');
    process.exit(0);
}

const input = args[0];

for (const order of orders) {
    if (order === input) {
        Handle(order);
        process.exit(0);
    }
}
