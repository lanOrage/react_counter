import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from "./components/app";
import  {counter} from './redux/reducers'
//生成一个store对象
const store = createStore(counter);//传入一个reducer
//内部会第一次调用reducer函数得到初始state

function render(){
    ReactDOM.render(<App store={store}/>,document.getElementById("root"));
}
//初始化需要渲染一次
render();
//订阅监听（store中的状态变化，那么就会重新触发，自动调用，重新渲染,）
store.subscribe(render);