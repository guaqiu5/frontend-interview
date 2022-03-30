var arr1 = [1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];
function flatten(arr){
    while(arr.some((item)=>Array.isArray(item))){
        arr=[].concat(...arr) 
}
return arr
}
//   console.log(flatten(arr1)) ; //[1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

//reduce
var arr1 = [1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];
function flatten2(arr) {
    return arr.reduce((res,next)=>{
        return res.concat(Array.isArray(next)?flatten2(next):next) },[])
   }
// console.log(flatten2(arr1))


function flat(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr=[].concat(...arr)
        console.log(arr)
    }
    return arr
}
function flat2(arr){
    arr.reduce((res,next)=>{return res.concat(Array.isArray(next)?flat2(next):next)},[])
}
console.log(flat(arr1))