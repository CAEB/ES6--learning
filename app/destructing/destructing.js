/*
todo 解构赋值：解构赋值允许你使用类似数组或对象字面量的语法将数组和对象的属性赋给各种变量。
*/
/*todo 数组的解构赋值*/
//todo 数组赋值传统的做法
var arr=[1,2,3];
var first=arr[0];
var second=arr[1];
var three=arr[2];
console.log('arr:',first,second,three);
//todo 数组赋值ES6
var arr1=[1,2,3];
var [first1,second1,three1]=arr1;
console.log('arr1',first1,second1,three1);
//todo 数组解构赋值一些扩展
//todo 1.数组嵌套解构
var [first2,second2,[first2_1]]=[1,2,[1,2],3];
console.log('arr2',first2_1);
//todo 2.数组跳过解构
var [,,first3]=[1,2,3];
console.log('arr3',first3);
//todo 3.数组不定参数解构
var [first4,...other]=[1,2,3,4,5];
console.log(other);
//todo 4.对空数组解构为undefined
//todo 5.迭代器同样适用解构
function* eb() {
    var a=0,b=1;
    while (true) {
        yield a;
        [a,b]=[b,a+b];
    }
}
var [first5,second5,three5,fourth5,fifth5,sixth5]=eb();//todo 解构赋值会自动调用.next();
console.log('eb',first5,second5,three5,fourth5,fifth5,sixth5);
/*todo 对象的解构赋值*/
//todo 一般的解构
var {name:a}={name:'qwd'};
console.log('name',a);
//todo 简写的解构(变量名和属性名一样)
var {a}={a:'qwd'};
console.log('a',a);
//todo 对象嵌套解构
var objArr={
    a:'qwd',
    b:[2,{c:'eb'}]
}
var {a,b:[,{c}]}=objArr;
console.log('objArr',c);
//todo 对空对象解构为undefined
//todo 解构时添加默认值
var [defaulA=1]=[2];
console.log('defaulA',defaulA);
var {defaultName=1}={defaultName:2};
console.log('defaultName',defaultName);
/*todo 解构的实际应用*/
//todo 函数参数定义
/*var {url,data,success}=ajax;
function AjaxAsync({url,data,success}) {
    
}*/
//todo 多重返回值
function returns() {
    return [1,2];
}
var [a,b]=returns();
console.log('returns',a,b);


