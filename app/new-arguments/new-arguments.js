/*
todo 默认参数和不定参数
*/
//todo 传统方法实现不定参数
function contain1(str) {
    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        if(str.indexOf(obj)===-1){
            return false;
        }
    }
    return true;
}
console.log('contain1:',contain1('qwd','d','a'));
//todo ES6实现不定参数
function contain2(str,...arg) {
    for (var i of arg){
        if(str.indexOf(i)===-1){
            return false;
        }
    }
    return true;
}
console.log('contain2:',contain2('qwd','d'));
//todo 默认参数,切记传递undefined等效于不传值。
function defaultArg(arg1=1,arg2=2) {
    return `${arg1}+${arg2}`
}
console.log(defaultArg());