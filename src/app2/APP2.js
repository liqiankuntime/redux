import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addGoods, addGoodsAsync, deleGoods} from "./react-redux-reducer";

class App2 extends Component {
    render() {
        let addGoods = this.props.addGoods;
        let deleGoods = this.props.deleGoods;
        let addGoodsAsync = this.props.addGoodsAsync;
        return (
            <div className="App">
                <p>有商品{this.props.num}件</p>
                <button onClick={() => addGoods()}>添加一商品</button>
                <button onClick={() => deleGoods()}>取消已商品</button>
                <button onClick={() => addGoodsAsync()}>稍等一會添加一商品</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        num: state
    }
}
const actionsCreator = {addGoods, addGoodsAsync, deleGoods}

App2 = connect(mapStateToProps, actionsCreator)(App2);
export default App2;
