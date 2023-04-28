const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);


module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent)
            }

            const exisitingProdIndex = cart.products.findIndex(prod => prod.id === id);
            if (exisitingProdIndex !== -1) {
                cart.products[exisitingProdIndex].qty += 1;
            } else {
                cart.products.push({ id, qty: 1 });
            }
            cart.totalPrice += +productPrice;

            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            })
        });
    }
}