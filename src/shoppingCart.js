const DISCOUNTS = {
    Regular: 0,
    Member: 10,
    VIP: 20,
};

const SHIPPING_COSTS = {
    Electronics: 10,
    Books: 0,
    Clothing: 5,
};

function Handle(input) {
    const parts = input.split(' ');

    const customer = parts[0];

    if (!(customer in DISCOUNTS)) {
        console.log('INVALID CUSTOMER TYPE');
        return;
    }

    const discount = DISCOUNTS[customer];

    let subtotal = 0;
    let shipping = 0;

    for (let i = 1; i < parts.length; i++) {
        const item = parts[i].split(':');

        const category = item[0];
        const price = parseInt(item[1], 10);
        const quantity = parseInt(item[2], 10);

        if (!(category in SHIPPING_COSTS)) {
            console.log('INVALID CATEGORY');
            return;
        }

        subtotal += price * quantity;
        shipping += SHIPPING_COSTS[category] * quantity;
    }

    let total = subtotal - (subtotal * discount) / 100;

    if (customer !== 'VIP') {
        total += shipping;
    }

    console.log(`Order Total: ${total.toFixed(2)}`);
}
