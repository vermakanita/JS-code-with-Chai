// array shello coph banata h refrence value me change 
// deep cophy me change hoga
const myarr=[1,9,3,4];
let arr={"kanita":3};
const myarr2 = new Array(1,12,3,4,5);
// console.log(myarr[1]);

//Array methods
// myarr.push(6);
// myarr.push(7);
// myarr.push(10);
// console.log(myarr);
// myarr.pop(10)
// myarr.pop()
// myarr.unshift(19)
// myarr.shift()
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));


//  const na=myarr.join();
//  console.log(myarr)
//  console.log(typeof na);


console.log("a",myarr)
// slice , splice
const arr1= myarr.slice(1,3);
console.log(arr1);
console.log("b",myarr);

const arr2=myarr.splice(1,3);
// console.log(arr2);
console.log("c",myarr);
console.log(arr2)


