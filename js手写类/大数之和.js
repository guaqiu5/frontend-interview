function add(nums1,nums2){
    let zero='0'.charCodeAt()
    let addedNum=nums1.length>=nums2.length?nums1:nums2
    let other=nums1.length>=nums2.length?nums2:nums1
    let extraAdd=0
    let res=[]
    for(let i=nums1.length-1 ,j=nums2.length-1;i>=0&&j>=0;i--,j--){
        let a1=nums1[i].charCodeAt()-zero
        let a2=nums2[j].charCodeAt()-zero
        let sum=a1+a2+extraAdd
        console.log(sum)
       
        if(extraAdd==1) extraAdd=0
        if(sum>9){
            extraAdd=1
            res.unshift(sum-10)
        }else{
            res.unshift(sum)
        }
    }
    for(let i=addedNum.length-other.length-1;i>=0;i--){
        let sum=addedNum[i].charCodeAt()-zero+extraAdd
        if(extraAdd) extraAdd=0
        if(sum>9){
            extraAdd=1
            res.unshift(sum-10)
        }else{
            res.unshift(sum)
        }
    }
    return res
}

console.log(add(`1923233131323`,`49323242424`))
console.log(1923233131323+49323242424)