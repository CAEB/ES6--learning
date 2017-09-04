/*
todo for-in循环用来遍历对象属性，遍历键值对中的键名。(对象的遍历)
todo for-of循环用来遍历数据—例如数组中的值，遍历键值对中的键值。(类数组的遍历，字符串也可以)
*/

/*
todo 数组的遍历
*/
var arr=[1,2,3,4,5,6,7,8];
//todo 普通的遍历
for (var i = 0; i < arr.length; i++) {
    var obj = arr[i];
    console.log(obj);
}
//todo forEach遍历
arr.forEach((value,index)=>{
    console.log(value,index);//todo 数值在前，索引在后。
});
//todo for-of遍历
for (var value of arr){
    console.log(value);
}
//todo for-in遍历
for (var value in arr){
    console.log(value);
}
/*
todo 对象的遍历
*/
//todo for-in 遍历对象属性，对数组进行遍历可能会出现问题
var obj={a:'1',b:'2',c:'3',d:'4',e:'5'};
for (var value in obj){
    console.log(value);
}


