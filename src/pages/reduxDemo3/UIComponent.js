import React from 'react';
// UI组件
export class UIComponent extends React.Component {

    increment = () => {
        this.props.containAdd(1)
    }

    decrement = () => {
        this.props.containDecrement(1)
    }

    render() {
        return (
            <>
                <div>{this.props.count}</div>  {/* 获取store中的值  */}
                <br/>
                <div>
                    <button onClick={this.increment}>加一</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.decrement}>减一</button>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
           </> 
        )
    }

}