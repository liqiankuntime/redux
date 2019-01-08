import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from './miniRedux';




export const connect = (mapStateToProps=state=>state, mapDispatchToProps={}) => (WrapComponent) => {
    return class ConnectComponent extends Component{
        static contextTypes = {
            store: PropTypes.object
        }
        constructor(props, context){
            super(props, context);
            this.state={
                props: {}
            }
            console.log('consss:::', mapStateToProps, mapDispatchToProps)
        }
        componentDidMount(){
            const {store} = this.context;
            console.log('sttttoreee::', store, this.context);
            store.subscribe(() => this.update());
            this.update();
        }
        update(){
            const {store} = this.context;
            const stateProps = mapStateToProps(store.getState());//() => dispatch(fn())
            const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
            this.setState({
                props: {
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }

        render(){
            return (
                <WrapComponent {...this.state.props}></WrapComponent>
            )
        }
    }
}






export class Provider extends React.Component{
    static childContextTypes = {
        store: PropTypes.object
    }
    getChildContext(){
        console.log('getChildContext>>>', this.store);
        return {
            store: this.store
        }
    }

    constructor(props, context){
        super(props, context);
        this.store = props.store;
        console.log('constructor>>>', props, this.store);
    }

    render(){
        return(
            this.props.children
        )
    }
}