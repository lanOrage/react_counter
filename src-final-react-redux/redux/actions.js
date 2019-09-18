/*
* 包含所有的action-creator，用来返回action对象
*/
import {INCREMENT,DECREMENT} from './action-types';

export const increment = num=>({type:INCREMENT,data:num});
export const decrement = num=>({type:DECREMENT,data:num});


