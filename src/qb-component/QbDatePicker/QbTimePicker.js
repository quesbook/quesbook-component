/**
 * Created by az on 2017/7/20.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbTimePicker extends Component {
    render() {
        const {className, time, href, label} = this.props;
        return (
            <div style={{position: 'relative'}}>
                <button className="btn btn-secondary"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">{time}</button>
                <div className="dropdown-menu" style={dropdownStyle}>

                </div>
            </div>
        )
    }
}

const style = {
    timePicker
}

export default QbTimePicker;