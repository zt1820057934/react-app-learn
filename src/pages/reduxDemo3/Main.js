import React from 'react';
// 容器组件
import ContainerDemo from './ContainerDemo'
import StoreDemo from './StoreDemo'
export class Main extends React.Component {

    render() {
        return (
            <>
                <ContainerDemo store={StoreDemo}/>
           </>
        )
    }

}