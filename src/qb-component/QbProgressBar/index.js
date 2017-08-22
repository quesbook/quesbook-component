import React, { Component } from 'react';
import './index.scss';

class QbProgressBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { compWidth, percentage, compStyle } = this.props;
        let progressStyle = {
            width: percentage
        };
        return (
            <div className="QbProgressBar" style={{ ...compStyle, width: compWidth }}>
                <div className="QbProgressBar_Indicator">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <div className="QbProgressBar_Progress" style={progressStyle} />
            </div>


        );
    }
}

QbProgressBar.propTypes = {
    compStyle: React.PropTypes.object,
    compWidth: React.PropTypes.string,
    percentage: React.PropTypes.string
};

QbProgressBar.defaultProps = {
    compWidth: '315px',
    compStyle: null
};

export default QbProgressBar;
