import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Test from './test';

export default class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Test} >
                    <Route path="/start" component={null} />
                    <Route path="/studyplan" component={null}/>
                    <Route path="/articles" component={null}/>
                    <Route path="/simulation" component={null}/>
                    <Route path="/practicequestions" component={null}/>
                </Route>
            </Router>
        );
    }
}
