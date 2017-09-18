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
        const { location } = this.props;
        const modal = location.state && location.state.to === 'modal';

        let pos = {};
        if(modal){
            pos = location.state.meta.from;
        }

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

export default withRouter(App);
