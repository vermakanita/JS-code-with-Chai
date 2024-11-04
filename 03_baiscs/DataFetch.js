
const book=[{
    title:'book name',genre:'non-function',published:1991,edition:1090

},
{
    title:'book name',genre:'history',published:1981,edition:2024

},
{
    title:'book name',genre:'non-function',published:2000,edition:2098

}];

let userbook =book.filter( (bk)=>bk.genre==='non-function')
userbook=book.filter((bk)=>{return bk.published>=2000})
console.log(userbook);