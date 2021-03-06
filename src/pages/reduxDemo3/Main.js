import React from 'react';
// 容器组件
import ContainerDemo from './ContainerDemo'
import StoreDemo from './StoreDemo'
import { Provider } from 'react-redux'

export class Main extends React.Component {

    render() {
        /*
        这样写得重复传入store
        return (
            <>
                <ContainerDemo store={StoreDemo}/>
           </>
        )*/ 
        // 优化: 这样可以使所有子组件都能拿到store中的值， 
        //或者 直接在 index中 ReactDom.render( <Provider><App/></Provider>,...  )
        return (
            <Provider store={StoreDemo}>
                <ContainerDemo />
            </Provider>
        )
    }

}