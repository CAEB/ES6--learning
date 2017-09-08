/*
todo js中的6种基本类型
todo 1.Undefined 未定义
todo 2.Null 空值
todo 3.Boolean 布尔类型
todo 4.Number 数字类型
todo 5.String 字符串类型
todo 6.Object 对象类型
todo ES6新添加的一种基本类型 Symbol
todo Symbol:Symbol是一个不可变的数据类型，用来产生唯一的标识，但是却无法直接访问这个标识。主要用来解决属性名的冲突。
todo 每一个symbol都独一无二，不与其它symbol等同，即使二者有相同的描述也不相等；
*/
//todo 创建
var sym = Symbol('qwd');
console.log(typeof sym);
//todo 用作对象的属性
var eb={
    val:'qwd',
    [Symbol('age')]:23
};
console.log('eb',Object.getOwnPropertyNames(eb));//todo 获取对象的普通属性名
console.log('eb',Object.getOwnPropertySymbols(eb));//todo 获取对象的Symbol属性名
//todo 应用
var mySymbol = Symbol();
var eb2={}
eb2[mySymbol]='qwd';
console.log('mySymbol',eb2[mySymbol]);//todo 保证了不会命名冲突
//todo Symbol 描述
var mySymbol1 = Symbol('first');
var eb3={};
eb3[mySymbol1]='eb';
console.log(mySymbol1,'eb3[mySymbol1]');
//todo 调用Symbol
console.log(Symbol.for('first'));