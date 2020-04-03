import React, { Component } from 'react';
import {Text,View} from 'react-native';
// 装饰器其实就是一个函数，在函数里可以写一些新的逻辑，
// 包裹后面修饰的内容，讲新的逻辑传递到被装饰的内容中去
// 高阶组件其实就是一个函数，就是装饰器
function helloWord(target:any){
    console.log('hello word!');
}
@helloWord
class HelloWordClass{

}


class Desc extends Component {
    render() {
        return (
            <View>
                <Text></Text>
            </View>
        );
    }
}

export default Desc;