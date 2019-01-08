const ADD_GOODS = 'ADD_GOODS';
const DELE_GOODS = 'DELE_GOODS';

//reducer
export function myReducers (state=0, action) {
    console.log('action::', action, state);
    switch(action.type){
        case ADD_GOODS :
            return state + action.data;
        case DELE_GOODS:
            return state - action.data;
        default:
            return 10000;
    }
};


//action creator
export function addGoods(){
    return {type: 'ADD_GOODS',data: 1}
}

export function deleGoods(){
    return {type: 'DELE_GOODS', data: 1}
}

export function addGoodsAsync() {
    return dispatch => {
        setTimeout(() => dispatch(addGoods()) ,2000)
    }
}