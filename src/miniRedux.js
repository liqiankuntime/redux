
export function createStore(reducer){
    let innerState = {};
    let innerListeners = [];
    function getState(){
        return innerState;
    }
    function dispatch(action){
        innerState = reducer(innerState, action);
        innerListeners.forEach((fn) => fn())
    }
    function subscribe(...listen){
        console.log('slistenn:', listen)
        innerListeners.push(...listen);
        console.log('scccc:::', innerListeners);
    }
    dispatch({type: '$$YONYOU_TOALLBILL'});


    return {
        getState,
        dispatch,
        subscribe
    }
}


function bindActionCreator(creator, dispatch){
    return (...args) => dispatch(creator(...args))
}

export function bindActionCreators(creators, dispatch){
    let bound = {};
    Object.keys(creators).forEach((item) => {
        let creator = creators[item];
        bound[item] = bindActionCreator(creator, dispatch);
    })
    return bound;
}