import React,{Component} from 'react';
import PropTypes from 'prop-types';

 export  default  class Counter extends Component{
    static  propTypes={
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    };
    increment= ()=>{
        //    1.得到选择的增加数量
        const num = this.select.value*1;
        //    调用store的方法更新状态
        this.props.increment(num);
    }
    decrement= ()=>{
        //    1.得到选择的增加数量
        const num = this.select.value*1;
        //    调用store的方法更新状态
        this.props.decrement(num);
    }
    incrementifodd= ()=>{
        //    1.得到选择的增加数量
        const num = this.select.value*1;
        //    2.得到原本的count状态值，如果符合条件那么计算新的count值
        const count = this.props.count;
        if(count%2!==0) {
            this.props.increment(num);
        }
    }
    incrementasyc= ()=>{
        //    1.得到选择的增加数量
        const num = this.select.value*1;
        setTimeout(
           () =>{
               //    3更新状态
               this.props.increment(num);//这里就不需要再先获取count值，直接加就好了
           },1000
       )
    }
    render(){
        const  {count}=this.props;
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select=>this.select=select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;
                    <button onClick={this.incrementifodd}>increment if odd</button>&nbsp;
                    <button onClick={this.incrementasyc}>increment async</button>
                </div>
            </div>
        )
    }
}
