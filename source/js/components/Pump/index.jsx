import React, {Component} from 'react';
import {ButtonGroup} from 'react-bootstrap';
import Controller from '../Controller';

export default class Pump extends Component {
    render() {
        const buttons = [1, 2, 3, 4, 5].map((controller) => {
            return (
                <Controller
                    key={controller}
                    id={controller}
                />
            );
        });
        return (
            <div className='BackgroundPump'>
                <ButtonGroup className='controllers'>
                    {buttons}
                </ButtonGroup>
            </div>
        );
    }
}

