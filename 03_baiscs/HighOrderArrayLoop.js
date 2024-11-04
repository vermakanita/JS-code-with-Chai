// for of
// const n=[1,2,3,4,5]
// for(const a of n){
//     console.log(a);
// }


// const greet="hello world"
// for(const g of greet){
//     console.log(`Each char is ${g}`)
// }


//maps it works on key and values 
// it containes only uniqe value and also maintain a order it does't contain duplicate values
// const map=new Map();
// map.set('IN',"india");
// map.set('usa',"united states of america");
// map.set('fr',"france");
// map.set('fr',"france");
// console.log(map);

// for(const [key,value] of map){
//     console.log(key,':-',value)
// }

// const myobj={
//     "game":'pbg',
//     "game2":"dr driving"
// }
// for (const [key,value]of myobj){ // we can not itrate the obj like this 
//     console.log(key,":-",value);
// }

























// for of loop ham kabhi bhi object ko itrate karane ke liye nhi lga skte
// object ko itrate kran eke liye hm for in ka use krte hai 
const object ={
    js:'java script',
    j:'java',
    cp:'cpp'
}
for(const key in object){
    //  console.log(key) // console keys
    // console.log(object[key])//console values
    // console.log(`${key}shortcut ${object[key]}`) // both console key and values 

}



// for in loop array pr 
const lang=["java","rb","cpp"]
for(const key in lang){
    // console.log(key)
   // console.log(lang[key])
} 



// const map=new Map();      // map ko for in loop se itrate nhi kr skte hai 
// map.set('IN',"india");
// map.set('usa',"united states of america");
// map.set('fr',"france");
// map.set('fr',"france");
// // console.log(map);
// for(const key in map){
//     console.log(key)
//     // console.log(map[key])
// }






















// for each loop
// it required callback function and when we right the callvback function we dont write the name of function 
const c=["kanita","verma"]
// c.forEach( function (val)
// {
//     console.log(val)
// })

// c.forEach((val)=>{
//     console.log(val)
// })



// function printme(item){
//     console.log(item);
// }
// c.forEach(printme)



// c.forEach((item,index,c) =>{
//     console.log(item,index,c)
// })


// const obj=[
//     {
//         langname:"java",
//         filename:"java"
//     },
//     {
//         langname:"python",
//         filename:"py"
//     },
//     {
//         langname:"java script",
//         filename:"js"
//     }
// ]


//     obj.forEach((item) =>{
//         console.log(item.langname)
//     })
     
// const value=["kanita","verma","kogawan","indore"]
// const v=value.forEach((item)=>{
//     console.log(item);
//     return item

// })
// console.log(v)



const  num=[1,2,3,4,5,6]
// const nnum=num.filter((n)=>n>3) // filter return krta h foreach return nhi krta 
// console.log(nnum)




// const nnum=num.filter((n)=>{ // agr scope lagaya h to retune lilka compalsary hai
//      n>3
// })
// console.log(nnum)


// const nnum=num.filter((n)=>{
//      return n>3
// })
// console.log(nnum)












