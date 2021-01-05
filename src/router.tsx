import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Page from './pages/page'
import Detail from './pages/detail'
import Hooks from './pages/hooks'

const BasicRoute = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Route exact path="/hooks" component={Hooks}></Route>
            </Switch>
        </HashRouter>
    )
}

export default BasicRoute