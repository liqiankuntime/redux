import React, { Component } from 'react';
import {addGoods, addGoodsAsync, deleGoods} from "./redux-reducer1";

class App1 extends Component {
    render() {
        let {store} = this.props;
        let num = store.getState();
        let addGoods = this.props.addGoods;
        let deleGoods = this.props.deleGoods;
        let addGoodsAsync = this.props.addGoodsAsync;
        return (
            <div className="App">
                <p>有商品{num}件</p>
                <button onClick={() => store.dispatch(addGoods())}>添加一商品</button>
                <button onClick={() => store.dispatch(deleGoods())}>取消已商品</button>
                <button onClick={() => store.dispatch(addGoodsAsync())}>稍等一會添加一商品</button>
            </div>
        );
    }
}

export default App1;
