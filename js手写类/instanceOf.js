function myInstance(obj,type){
    if(typeof obj!='object'||!obj){
        return false
    }
    let constructor=obj.__proto__
    if(constructor==type.prototype) return true
    else{
        myInstance(constructor,type)
    }
}
// 测试用例
console.log(myInstance([], Array)) // true
console.log(myInstance({}, Object))// true
console.log(myInstance(/1/, RegExp)) // true
console.log(myInstance('', String))// false