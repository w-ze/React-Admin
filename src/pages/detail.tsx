import React from "react";
import Son from "./son";
import { Switch, Route, RouteComponentProps } from "react-router-dom";

interface DetailProps extends RouteComponentProps{
}

interface DetailState{
    
}

class Detail extends React.Component<DetailProps,DetailState> {
    render() {
        return (
            <div>
                detail
                <Switch>
                    <Route exact path="/detail/son" component={Son}></Route>
                </Switch>
            </div>
        );
    }
    componentDidMount(){
        console.log(this.props)
        console.log(new URLSearchParams(this.props.location.search).get('id'))
        console.log(new URLSearchParams(this.props.location.search).get('sid'))
    }
}

export default Detail;
