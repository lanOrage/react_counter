import React from 'react';
import {connect} from 'react-redux';
import {increment,decrement} from '../redux/actions';

import Counter from '../components/counter'
//一个套路，记住就好
export default connect(
//    在这里面指定给App组件传递的数据
    state=>({count:state}),
    //这里是一个函数
    //这里state比较简单，在store中存储的state就只有count值，所以这里直接返回state
    {increment,decrement}
    //相当于{increment：increment，decrement：decrement}
    // ，前者的属性名是应该和本App组件中声明的属性名相同，
    //，后者的属性值是从  action 传来的属性，是一个函数（一个返回actino对象的action工厂函数），。
    //以上两个对象中的属性都会被解构传递给App组件作为属性
)(Counter);