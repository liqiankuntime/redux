import React, { Component } from 'react';


class AppTest extends Component {
    render() {
        let topName = 'YONYOU';
        return (
            <div className="App">
               父级组件
                <Son name={topName}></Son>
            </div>
        );
    }
}

export default AppTest;


class Son extends Component{

    render (){
        return(
            <div>
                子级组件
                <GSon name={this.props.name}></GSon>
            </div>
        )
    }
}

class GSon extends Component{

    render(){
        return (
            <div>
                孙级组件
                顶层组件是{this.props.name}
            </div>
        )
    }
}

