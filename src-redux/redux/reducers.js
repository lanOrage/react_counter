/*包含n个reducer函数的模块*/
import {increment,decrement} from './action-types'
export function counter(state=0,action) {
    switch (action.type) {
        case increment:
            return state+action.data;
        case  decrement:
            return state-action.data;
        default:
            return state;
    }
}
