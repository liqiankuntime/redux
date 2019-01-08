import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppContext extends Component {
    static childContextTypes = {
        name: PropTypes.string//object number
    }
    constructor(props){
        super(props);
        this.state = {
            name: 'YONYOU'
        }
    }
    getChildContext(){
        return this.state
    }
    render() {
        return (
            <div className="App">
                父级组件
                <Son name={this.state.name}></Son>
            </div>
        );
    }
}

export default AppContext;


class Son extends Component{

    render (){
        return(
            <div>
                子级组件
                <GSon ></GSon>
            </div>
        )
    }
}

class GSon extends Component{
    static contextTypes = {
        name: PropTypes.string
    }
    render(){
        return (
            <div>
                孙级组件
                顶层组件是{this.context.name}
            </div>
        )
    }
}

