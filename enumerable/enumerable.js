/*
todo 可枚举属性和不可枚举属性(enumerable属性决定),能被for-in遍历就是可枚举属性。反之不可枚举
*/
//todo js中基本包装类型的原型属性是不可枚举的，如Object, Array, Number等;
//todo Object对象的propertyIsEnumerable()方法可以判断此对象是否包含某个属性，并且这个属性是否可枚举。
//todo 需要注意的是：如果判断的属性存在于Object对象的原型内，不管它是否可枚举都会返回false。