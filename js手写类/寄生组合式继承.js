//浅克隆原型
function clonePrototype(proto){
    function ToolMan(){}
    ToolMan.prototype=proto
    return new ToolMan()
}

function inhert(Child,Father){
    let proto=clonePrototype(Father.prototype)
    proto.constructor=Child
    Child.prototype=proto
}

function Father(age){
    this.age=age
    this.friends=['jack','rose']
}
Father.prototype.getAge=function(){
    return this.age
}

function Child(age,name){
    Father.call(this,age)
    this.name=name
}

inhert(Child,Father)
Child.prototype.getName=function(){
    return this.name
}
let child=new Child(1,`杂鱼`)
let father=new Father(20)
console.log(father.getAge())
console.log(child.getName(),child.getAge())