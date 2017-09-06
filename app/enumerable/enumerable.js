/*
todo 可枚举属性和不可枚举属性(enumerable属性决定),能被for-in遍历就是可枚举属性。反之不可枚举
*/
/*todo 说明*/
//todo js中基本包装类型的原型属性是不可枚举的，如Object, Array, Number等;
//todo Object对象的propertyIsEnumerable()方法可以判断此对象是否包含某个属性，并且这个属性是否可枚举。
//todo 需要注意的是：如果判断的属性存在于Object对象的原型内，不管它是否可枚举都会返回false。
/*todo 作用*/
function Person() {
    this.name='qwd';
    this.age=23;
}
Person.prototype={
    constructor:Person,
    job:'it'
}
var person=new Person();
Object.defineProperty(person,'sex',{
    value:'male',
    enumerable:false//todo 设置是否可以枚举
})
for (var value in person){
    console.log(`${value}:${person[value]}`);//todo 遍历对象可枚举的属性，包括原型上的。
}
console.log(Object.keys(person) instanceof Array);//todo 遍历对象可枚举的属性(对象本身的，不包含原型上的),将遍历的属性名存放在数组中。
console.log(JSON.stringify(person));//todo 将对象可枚举的属性转换为JSON格式(对象本身的，不包含原型上的);
for (var key of Object.keys(person)){
    console.log(key,person[key]);
}
