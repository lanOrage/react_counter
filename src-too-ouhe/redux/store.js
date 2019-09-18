import {createStore} from 'redux';

import  {counter} from './reducers';

//生成一个store对象
//内部会第一次调用reducer函数得到初始state
 export const store = createStore(counter);//传入一个reducer
