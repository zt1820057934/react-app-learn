
const initData = [{name:'tom',age:18}];
// preState 上一状态，当第一次时，preState初始化为undefind, action 为随机值, 
export default function reducerPerson(preState = initData, action) {
    const { type, data } = action
    // data: { name: '', age: 12 }
    switch(type) {
        case 'personIncrement': 
            return [...preState, data]
        default:
            return preState        
    }

}