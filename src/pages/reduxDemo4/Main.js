import React from 'react';
// 容器组件
import ContainerDemo from './ContainerDemo'
import StoreDemo from './StoreDemo'
import { Provider } from 'react-redux'

export class Main extends React.Component {

    render() {
        return (
            <Provider store={StoreDemo}>
                <ContainerDemo />
            </Provider>
        )
    }

}