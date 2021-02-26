import { Component } from "react";
import React, {Component} from 'react'

class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    // 当子组件报错时， 会触发此函数调用，返回新的state
    static getDerivedStateFromError(error) {
        return { hasError: error }  
    }

    // 配合上方函数，统计错误
    componentDidCatch() {
        console.log('发生错误')
        // 统计错误，反馈给服务器
    }

    render() {
        return (
            <div>
                {this.state.hasError ? <div>发生错误</div> : <>渲染子组件</> }
            </div>
        )
    }

}