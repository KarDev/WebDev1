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

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (err) {
                return;
            }
            cart = JSON.parse(fileContent)
            const updatedCart = { ...cart }
            const product = updatedCart.products.find(prod => prod.id === id)
            if(!product){
                return;
            }
            
            const productQty = product.qty;

            updatedCart.products = updatedCart.products.filter(prod => prod.id !== id)

            updatedCart.totalPrice -= +productPrice * +productQty;

            fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
                console.log(err);
            })
        });
    }

    static getCart(cb) {
        fs.readFile(p, (err, fileContent) => {
            const cart = JSON.parse(fileContent);
            if(err){
                cb(null); 
            } else {
                cb(cart);
            }
        })
    }
}