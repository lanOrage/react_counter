import React from 'react';
import {connect} from 'react-redux';//利用connect函数
import {increment,decrement} from '../redux/actions';//引入action

import Counter from '../components/counter'

//一个套路，记住就好
export default connect(//这里生成容器组件
    //在这里面指定给Counter组件传递的数据
    //第一个参数是一个函数 ，这个函数返回的是一个对象
    //这里state比较简单，在store中存储的state就只有count值，所以这里直接返回state
    state=>({count:state}),
    {increment,decrement}
    //第二个参数是一个对象，相当于{increment：increment，decrement：decrement}
    // ，前者的属性名是应该和本Counter组件中声明的属性名相同，
    //，后者的属性值是从  action 传来的属性，是一个函数（一个返回action对象的action工厂函数），。
    //以上两个对象中的属性都会被解构传递给Counter组件作为属性
)(Counter);