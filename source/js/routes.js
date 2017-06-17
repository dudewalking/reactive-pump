import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './views/App';

const publicPath = '/';

export const routeCodes = {
    DASHBOARD: `${publicPath}`,
    ABOUT: `${publicPath}about`,
    ADMIN: `${publicPath}admin`,
    PUMP: `${publicPath}pump`,
};

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path={publicPath} component={App} />
            </BrowserRouter>
        );
    }
}
