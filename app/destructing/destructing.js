/*
todo 解构赋值：解构赋值允许你使用类似数组或对象字面量的语法将数组和对象的属性赋给各种变量。
*/
//todo 传统的做法
var arr=[1,2,3];
var first=arr[0];
var second=arr[1];
var three=arr[2];
console.log('arr:',first,second,three);
//todo ES6
var arr1=[1,2,3];
var [first1,second1,three1]=arr1;
console.log('arr1',first1,second1,three1);