// UI组件
import { UIComponent } from './UIComponent'
import { connect } from 'react-redux'

// 此函数的返回值作为状态传递给UI组件, state为redux中保存的状态,这里为reducerDemo中的preState，即为0
function mapStateToProps(state) {
    return { count: state}
}

// 此函数的返回值作为操作状态的方法传递给UI组件
function mapDispatchToProps(dispatch) {
    return { 
        containAdd: (num) => { 
            // 通知redux执行加法
            dispatch({type: 'increment', data: num})
        },
        containDecrement: (num) => {
            dispatch({type: 'decrement', data: num})
        }
    }
}

// 使用connect()()创建并暴露一个容器组件 
// 一般写法
// export default connect(mapStateToProps,mapDispatchToProps)(UIComponent)

// 简写
export default connect (
    state => ({ count: state}),
    {
        containAdd: (num) => ({type: 'increment', data: num}),   // redux会自动分发,所以不需要dispatch
        containDecrement: (num) => ({type: 'decrement', data: num})
    }
)(UIComponent)