/*todo:箭头函数:标识符=>表达式*/
//todo 一个参数时
var arr=[1,2,3,4,5];
//todo 1.ES5
var eb=arr.filter(function(job){
    return job==1;
});
//todo 2.ES6
var eb1=arr.filter(job => job==1 );
//todo 多个参数时
//todo 1.ES5
var eb2=arr.map(function (a,b) {
    return a+b;
});
//todo 2.ES6
var eb3=arr.map((a,b) => a+b);
//todo 箭头函数的this为外部作用域的this。