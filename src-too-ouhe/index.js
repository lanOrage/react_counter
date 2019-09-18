import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './redux/store'
import App from "./components/app";

function render(){
    ReactDOM.render(<App store={store}/>,document.getElementById("root"));
}
//初始化需要渲染一次
render();
//订阅监听（store中的状态变化，那么就会重新触发，自动调用，重新渲染,）
store.subscribe(render);