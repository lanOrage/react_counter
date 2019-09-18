import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './redux/store'
import App from "./containers/App";
import {Provider} from 'react-redux';
//内部会第一次调用reducer函数得到初始state

/*这时候变成了Provider来帮忙管理这个store对象*/
ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>)
,document.getElementById("root"));

/*function render(){
    ReactDOM.render(<App store={store}/>,document.getElementById("root"));
}*/
/*
//初始化需要渲染一次
render();
//订阅监听（store中的状态变化，那么就会重新触发，自动调用，重新渲染,）
store.subscribe(render);*/
