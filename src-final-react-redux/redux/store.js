import {createStore} from 'redux';
import  {counter} from './reducers';

//生成一个store对象
 export const store = createStore(counter);//传入一个reducer
