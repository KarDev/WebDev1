console.log("------------- async_await_demo.js executing. ------------")


let stocks = {
    Fruits:["Strawberry","grapes","banana","apple"],
    liquid:["Water","Ice"],
    holder:["Cone","cup","sticks"],
    toppings:["Chocolate","peanuts"]
};

let is_shop_open = true;

// let order = () => {
//     return new Promise((resolve, reject) => {
//         if(){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     })
// }

// --------------Async func----------

// async function order() {
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc doesn't exists", error)
//     }

//     finally{
//         console.log("runs code anyways");
//     }
// }

// order()

// .then(() => {
//     console.log("Testing this promise.")
// })

let toppings_choice = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(
                console.log("Which topping would you like to have?")
            )
        }, 3000);
    })
}

async function kitchen() {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");
    await toppings_choice();
    console.log(" D ");
    console.log(" E ");
}

kitchen();
console.log("Doing the dishes");
console.log("Cleaning the table.");
console.log("Taking the orders.");