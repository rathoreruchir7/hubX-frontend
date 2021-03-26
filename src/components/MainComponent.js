import React, {Component} from 'react'
import {Switch, Route, BrowserRouter as Router,  Redirect} from 'react-router-dom'
import Dashboard from './Dashboard'
class Main extends Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <Router>
                
                <Switch>
                        <Route exact path= '/home' component={() => <Dashboard /> }/>
                        <Redirect to='/home' />
                    </Switch>
            </Router>
        );
    }
}

export default Main;