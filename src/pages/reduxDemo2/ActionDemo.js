
// 同步

export const IncrementAction = data => ({ type: 'increment', data })

export const DecrementAction = data => ({ type: 'decrement', data })

// 异步action，action的值为函数
export const IncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(IncrementAction(data))
        }, time)
    }
}
