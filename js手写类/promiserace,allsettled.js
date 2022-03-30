const res = require("express/lib/response")

function all(arr){
    //返回一个promise
    return new Promise((res,rej) => {
      let length = arr.length  //传入的promise的个数
      let count = 0  //进入fullfilled的promise个数
      const result = []  //创建一个等长的数组,放置结果
      // 当传递是一个空数组，返回一个为fulfilled状态的promise
      if(arr.length === 0 ) {
        return new Promise.resolve(arr)
      }
      for(let i = 0; i < arr.length; i++){
        arr[i].then(resolve => {
          result.push(resolve) //将每次结果保存在result数组中
          count ++  //个数加1
          //是否所有的promise都进入fullfilled状态
          if(count === length){
            res(result)  //返回结果
          }
        }).catch(e => {
          rej(e)  //如果有错误则直接结束循环，并返回错误
        })
      }
    })
  }

  function race(arr){
    return new Promise((res,rej) => {
      for(let i = 0; i < arr.length; i++){
        arr[i].then(resolve => {
          res(resolve)  //某一promise完成后直接返回其值
        }).catch(e => {
          rej(e)  //如果有错误则直接结束循环，并返回错误
        })
      }
    })
  }
  

 function race2(arr){
    return new Promise((resolve,reject)=>{
        for(let i=0;i<arr.length;i++){
            arr[i].then((res,rej)=>resolve(res)).catch(e=>reject(e))
        }
    })
 }

 function all2(arr){
   return new Promise((resolve,reject)=>{
       const len=arr.length
       let result=[]
       let count=0
       if(len==0) return Promise.resolve(arr)
       for(let i=0;i<len;i++){
           arr[i].then((res)=>{
                result.push(res)
                count++
                if(count==len){
                    resolve(res)
                }
           }).catch(e=>{
               reject(e)
           })
       }
   })
 }

 function allSettled(arr){
     return new Promise((resolve,reject)=>{
         const len=arr.length
         let count=0
         let result=[]
         for(let i=0;i<len;i++){
             arr[i].then((res)=>{
                
             },(rej)=>{
                 
             })
         }
     })
 }