console.log("------------- async_IceCream.js executing. ------------")


let stocks = {
    Fruits:["Strawberry","grapes","banana","apple"],
    liquid:["Water","Ice"],
    holder:["Cone","cup","sticks"],
    toppings:["Chocolate","peanuts"]
};

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve,reject) =>{
        if(is_shop_open){
            setTimeout(resolve, ms);
        }
        else{
            reject(console.log("Shop is closed."));
        }
    })
}
async function kitchen() {
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected.`);

        await time(1000);
        console.log("Started the production.");

        await time(2000);
        console.log("Cut the fruit.");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} got added.`);

        await time(1000);
        console.log("Start the machine.");

        await time(2000);
        console.log(`Ice cream placed on ${stocks.holder[0]}`);

        await time(3000);
        console.log(`${stocks.toppings[0]} was selected as toppings.`);

        await time(2000);
        console.log("Serve the Ice Cream.");

    } catch(error){
        console.log("Customer left.", error)
    } finally{
        console.log("Day ended - Shop is closed.")
    }
}

kitchen();