/*
todo 集合
*/
//todo Set:一群值的集合。它是可变的，能够增删元素。不会包含一个相同的元素。
//todo 方法
/*
new Set：创建一个新的、空的Set。
new Set(iterable)：从任何可遍历数据中提取元素，构造出一个新的集合。
set.size：获取集合的大小，即其中元素的个数。
set.has(value)：判定集合中是否含有指定元素，返回一个布尔值。
set.add(value)：添加元素。如果与已有重复，则不产生效果。
set.delete(value)：删除元素。如果并不存在，则不产生效果。.add()和.delete()都会返回集合自身，所以我们可以用链式语法。
set[Symbol.iterator]()：返回一个新的遍历整个集合的迭代器。一般这个方法不会被直接调用，因为实际上就是它使集合能够被遍历，也就是说，我们可以直接写for (v of set) {...}等等。
set.forEach(f)：直接用代码来解释好了，它就像是for (let value of set) { f(value, value, set); }的简写，类似于数组的.forEach()方法。
set.clear()：清空集合。
set.keys()、set.values()和set.entries()返回各种迭代器，它们是为了兼容Map而提供的
*/
//todo Map:一个Map对象由若干键值对组成
/*
new Map：返回一个新的、空的Map。
new Map(pairs)：根据所含元素形如[key, value]的数组pairs来创建一个新的Map。这里提供的pairs可以是一个已有的Map 对象，可以是一个由二元数组组成的数组，也可以是逐个生成二元数组的一个生成器，等等。
map.size：返回Map中项目的个数。
map.has(key)：测试一个键名是否存在，类似key in obj。
map.get(key)：返回一个键名对应的值，若键名不存在则返回undefined，类似obj[key]。
map.set(key, value)：添加一对新的键值对，如果键名已存在就覆盖。
map.delete(key)：按键名删除一项，类似delete obj[key]。
map.clear()：清空Map。
map[Symbol.iterator]()：返回遍历所有项的迭代器，每项用一个键和值组成的二元数组表示。
map.forEach(f) 类似for (let [key, value] of map) { f(value, key, map); }。这里诡异的参数顺序，和Set中一样，是对应着Array.prototype.forEach()。
map.keys()：返回遍历所有键的迭代器。
map.values()：返回遍历所有值的迭代器。
map.entries()：返回遍历所有项的迭代器，就像map[Symbol.iterator]()。实际上，它们就是同一个方法，不同名字。
*/