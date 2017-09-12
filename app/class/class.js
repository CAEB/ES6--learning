/*
todo : Class
*/
//todo 传统的实现
function Person(name,age) {
    this.name=name;
    this.age=age;
}
Person.run=function run () { console.log('run1') };
Object.defineProperty(Person,'age',{
    get:function () {
        return 23;
    },
    set:function (newVal) {
        this.age=newVal;
    }
});
Person.prototype={
    newName:function newName() {
        return this.name+'abc';
    }
};
var person=new Person('qwd');
console.log(person.newName());
//todo 类实现
class Person1 {
    constructor (name,age) {
        this.name=name;
        this.age=age;
    }
    static run () {
        console.log('run2')
    }
    static get age () {
        return 21;
    }
    static set age (val) {
        this.age=val;
    }
    newName () {
        return this.name+'abc'
    }
    get name () {
        return 'qwe'
    }
    set name (val) {
        this.age=val;
    }
}
var person1=new Person1('eb',23);
Person1.run()
console.log('Person1',Person1.name,Person1.age,)
console.log(person1.age)
