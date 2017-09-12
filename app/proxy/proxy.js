/*
todo proxy:代理ES6规范定义了一个全新的全局构造函数：代理（Proxy）。它可以接受两个参数：目标对象（target）与句柄对象（handler）;
*/
var eb=new Proxy({},{
    get:function (target,key,receiver) {
        console.log(`getting${key}`);
        return Reflect.get(target,key,receiver)
    },
    set:function (target,key,value,receiver) {
        console.log(`getting${key}`);
        return Reflect.set(target,key,value,receiver);
    }
});
var target={},handler={};
var proxy= new Proxy(target,handler);
proxy.color='red';
console.log('proxy',target.color);//todo red
var target1={};
var handler1={
    set:function (target,key,value,receiver) {
        throw new Error('请不要为该对象设置属性');
    }
};
var proxy1=new Proxy(target1,handler1);
console.log('proxy1',/*proxy1.color='blue'*/);//todo 报错
//todo 应用 :自动填充对象
function Tree() {
    return new Proxy({},{
        get:function (target,key,receiver) {
            if(!(key in target)){
                target[key]=Tree();
            };
            return Reflect.get(target,key,receiver);
        }
    });
}
var tree=new Tree();
tree.branch.branch1.name='eb';
tree.branch.branch2.name='qwd';
console.log('tree',tree);
//todo 设置对象属性只读
function err() {
    throw new Error('该对象属性为只读');
}
function newMath(target) {
    return new Proxy(target,{
        set:err,
        defineProperty: err,
        deleteProperty: err,
        preventExtensions: err,
        setPrototypeOf: err
    })
}
console.log(newMath(Math).min(10,20));//todo 10
console.log(newMath(Math).max=Math.min);//todo 报错
