import {createStore} from "redux";


const ADD_GOODS = 'ADD_GOODS';
const DELE_GOODS = 'DELE_GOODS';

let newStor = createStore(myReducer)//1:创建store {getState,dispatch,subscribe}

function myReducer(state = 0, action){//3: Reducer
    console.log('inner:', state, action);
    switch(action.type){
        case ADD_GOODS:
            return state + action.data;
        case DELE_GOODS:
            return state - action.data;
        default:
            return 10;
    }
}
// const initState = newStor.getState();
// console.log('new::',initState)
//
console.log('new::', newStor.getState())
function listener1(){
    let param = newStor.getState();
    console.log(`state的值变为${param}`);
}

newStor.subscribe(listener1);

newStor.dispatch({type: ADD_GOODS, data: 2});//2: Action: {type: Add_ GOODS}
newStor.dispatch({type: DELE_GOODS, data: 1});
// newStor.dispatch({type: DELE_GOODS, data: 3});s