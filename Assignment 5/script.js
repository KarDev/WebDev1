console.log("------------- 1. Script.js executing. ---------------")

let stocks = {
    Fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","sticks"],
    toppings:["chocolate","peanuts"]
};


// Async---- doesn't stops at previous call to execute func timeout 


// let order = (fruit_name,call_production) =>{
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[fruit_name]} was selected`);
//     }, 2000);

//     call_production();
// };

// Making it sync

let order = (fruit_name,call_production) =>{
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected. 1`);
        call_production();
    }, 1000);

    
};

// Callback Hell

let production = () => {
    setTimeout(() => {
        console.log("production has started. 1");
        setTimeout(() => {
            console.log("The food has been chopped. 1");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added. 1`);
                setTimeout(() => {
                    console.log("Machine has been started. 1");
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stocks.holder[0]}. 1`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings. 1`);
                            setTimeout(() => {
                                console.log(`Ice cream got served. 1`);
                            
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 1000);
};

order(0,production);
















// async vs sync

// console.log(" I ");
// console.log(" eat ");
// setTimeout(()=>{
//     console.log(" ice cream ");
// },2000);
// console.log(" with a ");
// console.log(" spoon ");


// Promises

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );