import React from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'

// UI组件
class UIComponent extends React.Component {

    increment = () => {
        this.props.personIncrement({name: nanoid(), age: 18})
    }

    render() {
        return (
            <>
                <div>
                    上方计算值为 {this.props.count}
                </div>
                <br/>
                <div>
                    <button onClick={this.increment}>加一人</button>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <br/>
                <div>人:  {this.props.users.map((item,index) => <div key={index}>{item.name}----{item.age}</div>)}</div>  {/* 获取store中的值  */}
           </> 
        )
    }

}

// 简写
export default connect (
    state => ({ users: state.personKey, count: state.demoKey  }),  // 2. 当多个reducer合并然后分属到对应key后，这里需要按key来取
    {
        personIncrement: (data) => ({type: 'personIncrement', data})
    }
)(UIComponent)