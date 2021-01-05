import React from "react";
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import actions from "../store/actions";
import { StoreState } from '../type/index'

interface Props extends RouteComponentProps {
    name?: number;
    getData: any;
    count?: number;
    dispatch: Dispatch;
    add: Function
    // location: Location
}

interface State { }

class Page extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                222
                {this.props.name}
                <button onClick={this.open.bind(this)}>123</button>
                <button onClick={this.goDetail.bind(this)}>跳转</button>
                <div>
                    <button>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.add.bind(this)}>+</button>
                </div>
            </div>
        );
    }
    open() {
        this.props.getData("www");
    }
    add() {
        console.log(this.props)
        // this.props.dispatch(actions.count.add())
        this.props.add()
    }
    goDetail() {
        console.log(this.props)
        // this.props.history.push({ pathname: '/detail', state: { id: '123456' } });
        // this.props.history.push({ pathname: '/detail', query: { 'id': '123456' } });  //ts中报错
        this.props.history.push({ pathname: '/detail', search: "id=123&sid=www" });
    }
    componentDidMount() {
        console.log(this.props);
    }
}

function mapStateToProps(state: StoreState): { count: number } {
    return {
        count: state.CounterReducer.count
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        add: (data?:number) => { dispatch(actions.count.add(data)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);