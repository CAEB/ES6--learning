/*
todo 生成器：也是迭代器
todo 普通函数使用function声明，而生成器函数使用function*声明。
todo 在生成器函数内部，有一种类似return的语法：关键字yield。
todo 二者的区别是，普通函数只可以return一次，而生成器函数可以yield多次（当然也可以只yield一次）。
todo 在生成器的执行过程中，遇到yield表达式立即暂停，后续可恢复执行状态。
*/
//todo 简单的生成器函数
function* eb(name,age) {
    yield `你好,我叫${name}`;
    yield `今年${age}岁了`;
    yield `欢迎使用Generator`;
}
var it=eb('qwd',23);
console.log('it:',it.next(),it.next(),it.next(),it.next());
//todo 生成器实现迭代
function*  eb2(start,stop) {
    for (var i = start; i < stop; i++) {
        yield i;
    }
}
var it2=eb2(0,3);
console.log('it2:',it2.next(),it2.next(),it2.next(),it2.next());
//todo 生成器迭代数组
//todo 1.原生的迭代数组
var row=[1,2,3,4,5,6,7,8,9];
function splitRow1(row,length) {
    var new_row=[];
    for (var i = 0; i < row.length; i+=length) {
       new_row.push(row.slice(i,i+length));
    }
    return new_row;
}
console.log('row1:',splitRow1(row,5));
//todo 2.生成器迭代数组
function* splitRow2(row,length) {
    for (var i = 0; i < row.length; i+=length) {
        yield row.slice(i,i+length);
    }
}
var it3=splitRow2(row,5);
console.log('row2:',it3.next(),it3.next());
