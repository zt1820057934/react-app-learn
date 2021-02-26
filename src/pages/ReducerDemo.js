
const initData = 0;
// preState 上一状态，当第一次时，preState初始化为undefind, action 为随机值, 
// 这里当preState为undefined时, 赋值为0
export default function reducerDemo(preState = initData, action) {
    console.log('preState is ', preState, 'action is ', action)
    const { type, data } = action

    switch(type) {
        case 'increment': 
            return preState + data;
        case 'decrement':
            return preState - data;
        default:
            return preState        
    }

}