/**
 * Created by az on 2017/8/7.
 */
import React, {Component} from 'react';

class QbTab extends Component {
    render() {
        const {children, label, style, className} = this.props;
        return (
            <div style={{...tabStyle.frame, ...style}} ref={label} className={className}>
                {children}
            </div>
        );
    }
}

const tabStyle = {
    frame: {
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
    },
};

export default QbTab;