import React from 'react';
import storeDemo from './StoreDemo'
import { IncrementAction, DecrementAction,IncrementAsyncAction  } from './ActionDemo'

export class Main extends React.Component {

    componentDidMount() {
        this.unsubscribe = storeDemo.subscribe(() => {
            console.log('监听到数据变化')
            // 由于redux不处理页面重新渲染，这里强行渲染下
            this.setState({})
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    increment = () => {
        // 给store发送action
        storeDemo.dispatch(IncrementAction(1))
    }

    asyncIncrement = () => {
        storeDemo.dispatch(IncrementAsyncAction(1, 1000))
    }

    decrement = () => {
        storeDemo.dispatch(DecrementAction(1))
    }

    render() {
        return (
            <>
                <div>{storeDemo.getState()}</div>  {/* 获取store中的值  */}
                <br/>
                <div>
                    <button onClick={this.increment}>加一</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.decrement}>减一</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={this.asyncIncrement}>异步加一</button>
                </div>
           </> 
        )
    }

}