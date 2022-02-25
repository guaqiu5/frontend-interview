//https://juejin.cn/post/6844903929705136141#heading-11
const { log } = console
//乞丐版
function deepClone_v1(obj) {
    return JSON.parse(JSON.stringify(obj))
}
//问题  数组 循环引用  函数
const obj = {
    name: 'zayu',
    age: 20,
    girlfriend: {
        name: '张子枫',
        age: 20,
    }
}
obj.aaa = obj

//log(deepClone_v1(obj));
const array = [1, 2, 3, 4, 5]
    //朴素递归
function deepClone_v2(obj) {
    if (typeof obj == 'object') {
        let clonedObj = {}
        for (const key in obj) {
            clonedObj[key] = deepClone_v2(obj[key])
        }
        return clonedObj
    } else {
        return obj
    }
}
//考虑数组
function deepClone_v3(obj) {
    if (typeof obj == 'object') {
        let clonedObj = Array.isArray(obj) ? [] : {}
        for (const key in obj) {
            clonedObj[key] = deepClone_v3(obj[key])
        }
        return clonedObj
    } else {
        return obj
    }
}

//解决循环引用
function deepClone_v4(obj, map = new Map()) {
    if (typeof obj == 'object') {
        let clonedObj = Array.isArray(obj) ? [] : {}
        if (map.get(obj)) {
            return map.get(obj)
        }
        map.set(obj, clonedObj)
        for (const key in obj) {
            clonedObj[key] = deepClone_v4(obj[key], map)
        }
        return clonedObj
    } else {
        return obj
    }
}
log(deepClone_v1(array))