
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `제품명: ${this.name}, 가격: ${this.price}`;
    }
}
const mouse = new Product('마우스', 30000);
const keyboard = new Product('키보드', 20000);
const usb = new Product('USB 32GB', 15000);
const monitor = new Product('모니터', 200000);
const headset = new Product('헤드셋', 35000);
console.log(mouse.toString());
console.log('---------------------------------');

class Cart {
    constructor() {
        this.cart = [];
    }
    add(product, quantity) {
        if (quantity <= 0)
            return;
        this.cart.push({product, quantity});
    }
    sum() {
        let totalPrice = 0;
        for (let cart of this.cart) {
            totalPrice += cart.quantity * cart.product.price;
        }
        return totalPrice;
    }
    toString() {
        let result = '';
        for (let cart of this.cart) {
            result += cart.product.toString() + `, 수량: ${cart.quantity}\n`;
        }
        result += `합계: ${this.sum()}`;
        return result;
    }
}
let cart = new Cart();
cart.add(mouse, 4);
cart.add(usb, 10);
cart.add(monitor, 2);
console.log(cart.toString());