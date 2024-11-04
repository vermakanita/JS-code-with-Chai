const singletanObj= new Object()
console.log(singletanObj);
const nonsingletan={};
console.log(nonsingletan)

singletanObj.id="123abc";
singletanObj.name="simmy";
singletanObj.isLoggin=false;

// console.log(singletanObj);

const nestedobj={
    email:"kanita@123",
    fullName:{
        userfullname:{
            firstname:"vimal",
            lastName:"verma"
        }
    }
}

// console.log(nestedobj.fullName.userfullname.firstname);


const o1={1:"a",2:"b"};
const o2={2:"a",3:"b"};
const o3={4:"a",5:"b"};
const o4= Object.assign({},o1,o2,o3);
console.log(o4)


nestedobj[1].name
console.log(singletanObj)


