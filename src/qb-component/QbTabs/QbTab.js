/**
 * Created by az on 2017/8/7.
 */
import React, {Component} from 'react';

class QbTab extends Component {
    render() {
        const {children, label, tabStyle} = this.props;
        console.log('Tag tab render:', this.props.children);
        return (
            <div style={{...style.frame, ...tabStyle}} ref={label}>
                {children}
            </div>
        );
    }
}

const style = {
    frame: {
        height: 300,
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
    },
};

export default QbTab;