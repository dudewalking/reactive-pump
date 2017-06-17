import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from './../../views/Menu';
import About from '../../views/About';
import NotFound from '../../views/NotFound';
import Dashboard from '../../components/Dashboard';
import Pump from '../../components/Pump';

import {routeCodes} from '../../routes';

const App = ({children}) => {
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
};

App.propTypes = {
    children: PropTypes.object,
};

export default App;
