import React,{Component} from 'react';

export default class App extends Component{
    state={
        count:0
    }
    increment= ()=>{
        //    1.得到选择的增加数量
        const num = this.select.value*1;
        //    2.得到原本的count状态值，并计算新的count值
        const count = this.state.count;
        //    3更新状态
        this.setState({count:count+num})
    }
    decrement= ()=>{
        //    1.得到选择的增加数量
        const num = this.select.value*1;
        //    2.得到原本的count状态值，并计算新的count值
        const count = this.state.count;
        //    3更新状态
        this.setState({count:count-num})
    }
    incrementifodd= ()=>{
        //    1.得到选择的增加数量
        const num = this.select.value*1;
        //    2.得到原本的count状态值，如果符合条件那么计算新的count值
        if(this.state.count%2!==0) {
            const count = this.state.count;
            //    3更新状态
            this.setState({count: count + num})
        }
    }
    incrementasyc= ()=>{
        //    1.得到选择的增加数量
        const num = this.select.value*1;
        //    2.得到原本的count状态值，并计算新的count值
        const count = this.state.count;
        setTimeout(
           () =>{
               //    3更新状态
               this.setState({count:count+num})
           },1000
       )
    }
    render(){
        const  {count}=this.state;
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