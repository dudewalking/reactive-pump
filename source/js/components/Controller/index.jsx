import React, {Component} from 'react';
import Toggle from 'react-toggle';
import PropTypes from 'prop-types';

export default class Controller extends Component {

    _handleToggle() {}

    render() {
        return (
            <div>
                <label>
                    <Toggle
                        checked={true}
                        icons={false}
                        disabled={false}
                        onChange={() => this._handleToggle()}
                    />
                    <span className='label-text'>Test Controller {this.props.id}</span>
                </label>
            </div>
        );
    }
}

Controller.propTypes = {
    id: PropTypes.number,
};

