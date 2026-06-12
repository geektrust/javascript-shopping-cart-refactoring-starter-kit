function Handle(input) {
    const parts = input.split(' ');

    const customer = parts[0];

    let discount = 0;

    if (customer === 'Regular') {
        discount = 0;
    } else if (customer === 'Member') {
        discount = 10;
    } else if (customer === 'VIP') {
        discount = 20;
    } else {
        console.log('INVALID CUSTOMER TYPE');
        return;
    }

    let subtotal = 0;
    let shipping = 0;

    for (let i = 1; i < parts.length; i++) {
        const item = parts[i].split(':');

        const category = item[0];
        const price = parseInt(item[1], 10);
        const quantity = parseInt(item[2], 10);

        subtotal += price * quantity;

        if (category === 'Electronics') {
            shipping += 10 * quantity;
        } else if (category === 'Books') {
            shipping += 0;
        } else if (category === 'Clothing') {
            shipping += 5 * quantity;
        } else {
            console.log('INVALID CATEGORY');
            return;
        }
    }

    let total = subtotal - (subtotal * discount) / 100;

    if (customer !== 'VIP') {
        total += shipping;
    }

    console.log(`Order Total: ${total.toFixed(2)}`);
}
