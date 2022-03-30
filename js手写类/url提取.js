function getUrlParam(sUrl, sKey) {
    let left=sUrl.indexOf('?')+1
    let right=sUrl.lastIndexOf('#')
    let str=sUrl.slice(left,right)
    //console.log(str)
    let parse=str.split('&')
    let res=[]
    if(sKey){
    for(let i=0;i<parse.length;i++){
        let moreParse=parse[i].split('=')
        if(moreParse[0]==sKey){
            res.push(moreParse[1])
        }
    }
    }
    if(!sKey){
         for(let i=0;i<parse.length;i++){
        let moreParse=parse[i].split('=')
            res.push(moreParse[1])
        
    }
        if (res.length==1) res=res[0]
        return res
    }
    if (res.length==1) res=res[0]
    return res
}
console.log(getUrlParam(`http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe`,'key'))