let mixed = ['ken',34];
mixed.push('dcsx');
mixed.push(243);
// mixed.push(true);

let ninjas: string[] = [];

let mix: (string|number)[] = [];         

let age:any = 24;
age = "fscx"
age = 23;


let m: any[] = []

let nin :  {name : any, age: any};
nin = {name: "yoshi", age: 20}

// let greet: Function; 
let greet: (a: string, b:string) => void;


greet = (name: string, greeting: string) => {
    console.log('hello');
    console.log(`${name} says ${greeting}`);
}

// greet = "fdc"
type SringOrNum = string | number;

const add = (a:number,b:number,c?:SringOrNum, d:number = 10) : number => {
    console.log(a+b);
    console.log(c);
    console.log(d);
    return a + b;
}

add(2,3);



  