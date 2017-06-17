import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from './../../components/Global/Menu';
import About from '../../views/About';
import NotFound from '../../views/NotFound';
import Dashboard from '../../views/Dashboard';
import Pump from '../../views/Pump';

import { routeCodes } from '../../routes';


export default class App extends Component {
    static propTypes = {
        children: PropTypes.object,
    };

    render() {
        const { children } = this.props;
        return (
            <div className='App'>
                <Menu />
                <div className='Page'>
                    {children}
                    <Switch>
                        <Route exact path={routeCodes.DASHBOARD} component={Dashboard} />
                        <Route exact path={routeCodes.ABOUT} component={About} />
                        <Route exact path={routeCodes.PUMP} component={Pump} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}
