import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './redux/store'
import App from "./containers/App";//因为这里是默认暴露，所以直接import App
import {Provider} from 'react-redux';

/*这时候变成了Provider来帮忙管理这个store对象,所以store要传给provider*/
ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>)
,document.getElementById("root"));