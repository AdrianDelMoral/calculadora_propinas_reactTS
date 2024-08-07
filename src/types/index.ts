export type MenuItem = {
    id: number,
    name: string,
    description: string,
    price: number
}

export type OrderItem = MenuItem & { // agregamos todo lo que tiene el - type MenuItem - y se lo agregamos añadiendo quantity en la order
    quantity: number
}