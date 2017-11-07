import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition as OriginalCSSTransition } from 'react-transition-group';

import Header from './Header';

import Home from './Home';
import Recipe from './Recipe';

import './style.less';

class CSSTransition extends OriginalCSSTransition {
    onEntered = () => {
        // Do not remove enter classes when active
    }
}

class App extends Component {
    componentWillReceiveProps(nextProps) {
        this.previousView = this.props.location;
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
                <div className="view-container">
                    <Switch location={modal ? this.previousView : location}>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>

                <TransitionGroup>
                    <CSSTransition
                        timeout={450}
                        classNames="modal"
                        key={location.pathname}
                        mountOnEnter
                        appear
                    >
                        <div className="modal-container" style={pos}>
                            <Switch location={location}>
                                <Route path="/recipe/:id" component={Recipe} />
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default withRouter(App);
