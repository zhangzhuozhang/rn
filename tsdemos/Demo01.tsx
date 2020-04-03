import React, { Component } from 'react';
import {View,Text} from 'react-native';
// 类定义
//ES5
// 用Es5方式：创建一个Person类，有name和age属性，调用的时候传入
// function Person(name:string,age:number){
//     this.name=name;
//     this.age=age;
// }

// let user = new Person('zhang',34);
// console.log(user)

class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.age=age;
        this.name=name;
    }
    sayName(){

    }
}
class Worker extends Person{
    job:string;
    constructor(name:string,age:number,job:string){
        super(name,age);
        this.job=job
    }
}
function identity<T>(arg:T):T{
    return arg;
}
console.log(identity<string>('params1'))

let worker= new Worker('zhangsan',18,'chengxuyuan');
let user= new Person('zhang',18);

interface GenericIdentityFn<T>{
    (arg:T):T;
}
let myIdentity:GenericIdentityFn<number>=function(arg){
    return 100;
}
console.log(myIdentity(30));
class Demo01 extends Component {
    constructor(props:any){
        super(props);
    }
    render() {
        return (
            <View>
                
            </View>
        );
    }
}

export default Demo01;