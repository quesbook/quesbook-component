import React, { Component } from 'react';
import './QbProgressBar.scss';

class QbProgressBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { percentage, compStyle } = this.props;
        let progressStyle = {
            width: percentage
        };
        return (
            <div className="QbProgressBar" style={compStyle}>
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
    percentage: React.PropTypes.string
};

QbProgressBar.defaultProps = {
    compStyle: null
};

export default QbProgressBar;
