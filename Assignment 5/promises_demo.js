console.log("------------- 2. promises_demo.js executing. ---------------")

let stocks1 = {
    Fruits:["Strawberry","grapes","banana","apple"],
    liquid:["Water","Ice"],
    holder:["Cone","cup","sticks"],
    toppings:["Chocolate","peanuts"]
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {

        if(is_shop_open){
            setTimeout(() => {
                resolve(work());
            },time)
            
        }
        else{
            reject(console.log("Shop is closed. 2"));
        }
    })
};

order(2000,() => console.log(`${stocks1.Fruits[0]} was selected. 2`))

.then(() => {
    return order(1000, () => console.log("Production has started. 2"));
})

.then(() => {
    return order(2000, () => console.log("The fruit got chopped. 2"));
})

.then(() => {
    return order(1000, () => console.log(`${stocks1.liquid[0]} and ${stocks1.liquid[1]} got added. 2`));
})

.then(() => {
    return order(1000, () => console.log("Machine has started.  2"));
})

.then(() => {
    return order(2000, () => console.log(`Ice cream placed on ${stocks1.holder[0]}. 2`));
})

.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} added as toppings. 2`));
})

.then(() => {
    return order(1000, () => console.log("Ice cream served. 2"));
})

.catch(() => {
    console.log("Customer left");
})

.finally(() => {
    console.log("Day ended - Shop is closed.")
})