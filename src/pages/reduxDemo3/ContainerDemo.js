// UI组件
import { UIComponent } from './UIComponent'
import { connect } from 'react-redux'

// 此函数的返回值作为状态传递给UI组件
function mapStateToProps(state) {
    return { count: state}
}

// 此函数的返回值传递给UI组件，作为操作状态的方法
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
export default connect(mapStateToProps,mapDispatchToProps)(UIComponent)