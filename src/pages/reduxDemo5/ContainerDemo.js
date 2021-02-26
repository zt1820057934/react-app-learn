import React from 'react'
import { connect } from 'react-redux'

// UI组件
class UIComponent extends React.Component {

    increment = () => {
        this.props.containAdd(1)
    }

    decrement = () => {
        this.props.containDecrement(1)
    }

    render() {
        return (
            <>
                <div>计算: {this.props.count}</div>  {/* 获取store中的值  */}
                <br/>
                <div>下方人数为: {this.props.personCount}</div>  {/* 获取store中的值  */}
                <br/>
                <div>
                    <button onClick={this.increment}>加一</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.decrement}>减一</button>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
           </> 
        )
    }

}

// 简写
export default connect (
    state => ({ count: state.demoKey, personCount: state.personKey.length  }),  // 2. 当多个reducer合并然后分属到对应key后，这里需要按key来取
    {
        containAdd: (num) => ({type: 'increment', data: num}),   // redux会自动分发,所以不需要dispatch
        containDecrement: (num) => ({type: 'decrement', data: num})
    }
)(UIComponent)