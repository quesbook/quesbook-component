import React, { Component } from 'react';
import './QbProgressBar.scss';

class QbProgressBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { percentage, compStyle, showProgressText } = this.props;
        let progressStyle = {
            width: percentage
        };
        return (
            <div className="QbProgressBar" style={compStyle}>
                <div className="QbProgress-Bar">
                    <div className="QbProgressBar_Indicator">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="QbProgressBar_Progress" style={progressStyle} />
                </div>
                {
                    showProgressText ? <span className="QbProgress-Text">{percentage}</span> : null
                }
            </div>
        );
    }
}

QbProgressBar.propTypes = {
    compStyle: React.PropTypes.object,
    percentage: React.PropTypes.string,
    showProgressText: React.PropTypes.bool
};

QbProgressBar.defaultProps = {
    compStyle: null,
    showProgressText: false
};

export default QbProgressBar;
