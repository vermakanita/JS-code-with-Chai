
//object litrals 
const sym= Symbol("key1");
const detai={
    name:"kanita",
    "full name":"kanita verma",
    email:"kanita@123",
    [sym]:"mykey5"
}
// console.log(detai.name);
console.log(detai["full name"]);


 
// console.log(detai[sym])

// console.log(typeof detai[sym]);

// console.log(typeof sym)


//change the value 
// overright
console.log(detai.name="chandan Verma");
// Object.freeze(detai);
// (detai.name="vimal verma");
console.log(detai)


detai.greeting= function(){
    console.log("hello");

}
console.log(detai.greeting());


detai.greeting1= function(){
    console.log(`bye,${this.name}`);

}
console.log(detai.greeting1());