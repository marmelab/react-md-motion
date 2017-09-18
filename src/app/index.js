import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';

import Home from './Home';
import Recipe from './Recipe';

import './index.css';

class App extends Component {
    previousView = this.props.location
    
    previousLocation = this.props.location

    componentWillUpdate(nextProps) {
        this.previousView = this.props.location;
        this.previousLocation = this.props.location;
    }

    render() {
        const {location} = this.props;
        const { state } = location.state ? location : this.previousView;
        const modal = false;
        let pos = {};

        return (
            <div className="App">
                <Header/>
                <div className="">
                    <Switch location={modal ? this.previousView : location}>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>

                <div className="modal-container" style={pos}>
                    <Switch location={location}>
                        <Route path="/recipe/:id" component={Recipe} />
                    </Switch>
                </div>
            </div>
        );
    }
}
    // <Route path="/recipe/:id" component={Recipe} />

export default withRouter(App);
