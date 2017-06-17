import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {routeCodes} from '../../routes';
import workAndCoLogoImg from '../../../assets/img/workco-logo.svg';

export default class Menu extends Component {

    render() {
        return (
            <div className='Menu'>
                <div className='Menu-logo'>
                    <img src={workAndCoLogoImg} alt='Work & Co logo' />
                </div>
                <div className='Menu-links'>
                    <NavLink
                        activeStyle='Menu-link--active'
                        activeClassName='Menu-link--active'
                        className='Menu-link'
                        to={routeCodes.DASHBOARD}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        activeStyle='Menu-link--active'
                        activeClassName='Menu-link--active'
                        className='Menu-link'
                        to={routeCodes.ABOUT}
                    >
                        About
                    </NavLink>
                    <NavLink
                        activeStyle='Menu-link--active'
                        activeClassName='Menu-link--active'
                        className='Menu-link'
                        to={routeCodes.PUMP}
                    >
                        Pump
                    </NavLink>
                    <NavLink
                        activeStyle='Menu-link--active'
                        activeClassName='Menu-link--active'
                        className='Menu-link'
                        to={routeCodes.ADMIN}
                    >
                        Admin
                    </NavLink>

                </div>
            </div>
        );
    }
}
