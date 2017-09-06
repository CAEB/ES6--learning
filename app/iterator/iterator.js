/*
todo 迭代器是一个每次访问集合序列中一个元素的对象，并跟踪该序列中迭代的当前位置。
todo js中的迭代器是一个对象，提供next()方法返回序列中的下一个元素，遍历完成后抛出StopIteration异常。
todo 显式调用next()，隐式调用for-in,forEach等。
todo 有三类数据结构原生具备 Iterator 接口：数组、某些类似数组的对象、 Set 和 Map 结构
todo Symbol.iterator本身是一个表达式，返回 Symbol 对象的iterator属性，这是一个预定义好的、类型为 Symbol的特殊值，所以要放在方括号内
*/
//todo 迭代器的基本原理。
var it=makeIterator(['a','b']);
function makeIterator(array) {
    var index=0;
    return {
        next:function () {
            return index <array.length?{
                value:array[index++],
                done:false
            }:{
                value:undefined,
                done:true
            }
        }
    }
}
var a=it.next()
var b=it.next()
var c=it.next()
console.log(a,b,c);
//todo 暴露的接口
var arr=[1,2,3];
var iter=arr[Symbol.iterator]();//todo ES6暴露的迭代器接口(Symbol.iterator是一个表达式)
console.log('arr',iter.next());
//todo 在对象上部署迭代器方法
class EB {
    constructor (start,stop) {
        this.start=start;
        this.stop=stop;
    };
    [Symbol.iterator]() {
        return this;
    };
    next () {
        var value=this.start;
        if(value<this.stop){
            this.start++;
            return {
                value:value,
                done:false
            }
        }else{
            return {
                value:undefined,
                done:true
            }
        }
    }
}
function eb(start,stop) {
    return new EB(start,stop);
}
for (var val of eb(0,3)){
    console.log('EB',val);
}//todo for-of自动调iterator接口
//todo 通过迭代实现指针结构
function EB1(val) {
    this.value=val;
    this.next=null;
}
EB1.prototype[Symbol.iterator] = function () {
    var iterator={
        next:next
    };
    var self=this;
    function next() {
        if(self){
            var value=self.value;
            self=self.next;
            return {
                value:value,
                done:false
            }
        }else{
            return {
                value:undefined,
                done:true
            }
        }
    }
    return iterator;
}
var one=new EB1(1);
var two=new EB1(2);
var three=new EB1(3);
one.next=two;
two.next=three;
console.log('one',one);
for (var i of one){
    console.log('one',i)//
}//具备Symbol.iterator就可以被for-of遍历
//todo 为对象添加迭代器接口
var EB2={
    data:['qwd',23],
    [Symbol.iterator] () {
        const self=this;
        var index=0;
        return {
            next () {
                if(index < self.data.length){
                    return {
                        value:self.data[index++],
                        done:false
                    }
                }else{
                    return {
                        value:undefined,
                        done:true
                    }
                }
            }
        }
    }
};
var EB2_it=EB2[Symbol.iterator]();
var EB2_a=EB2_it.next();
var EB2_b=EB2_it.next();
console.log('EB2_a',EB2_a);
console.log('EB2_b',EB2_b);
//todo 类数组对象调用iterator，部署数组的Symbol.iterator方法即可，普通对象不具备该特性
var EB3={
    0:'a',
    1:'b',
    2:'c',
    length:3,
    [Symbol.iterator]:Array.prototype[Symbol.iterator]//todo 添加数组的iterator接口
};
for (var i of EB3){
    console.log('EB3',i);
};
/*
todo 默认调用Symbol.iterator方法的特殊场合
*/
//todo 1.扩展运算符
var str='qwd';
console.log('...',[...str]);
var arr1=[1,2,3,4];
console.log('...',['a',...arr1,'b']);
//todo 2.数组的遍历(数组只要遍历就默认调用了Symbol.iterator方法)
//todo 字符串也是类数组对象,原生具备Iterator接口
var str2='qwd';
var str2_it=str2[Symbol.iterator]();
var str2_a=str2_it.next();
var str2_b=str2_it.next();
var str2_c=str2_it.next();
console.log('str2',str2_a,str2_b,str2_c);
//todo 修改迭代器行为(自定义迭代器)
var str3=new String('eb');
str3[Symbol.iterator]=function () {
  return {
      next:function () {
          if(this.is_first){
              this.is_first=false;
              return{
                  value:'EB',
                  done:false
              }
          }else{
              return{
                  done:true
              }
          }
      },
      is_first:true
  }
};
console.log('str3',[...str3]);
//todo 可以为迭代器添加return,throw方法
function readFile() {
    return {
        next () {

        },
        return () {

        },
        throw () {

        }
    }
}