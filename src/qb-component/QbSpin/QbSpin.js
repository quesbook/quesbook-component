import React, { Component } from 'react';

import loadingImg from '../assets/image/icon/loading.gif';

const rootStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    opacity: 0.5,
    zIndex: 99999
}

class QbSpin extends Component {
    constructor(props) {
        super(props);
        this.sizeDict = {
            small: 64,
            large: 128
        }
    }

    get ImgStyle() {
        const { size } = this.props;
        return {
            width: this.sizeDict.size ? this.sizeDict.size : this.sizeDict.small
        }
    }

    render() {
        return (
            <div className="qb_spin" style={{ ...rootStyle, display: this.props.spinning ? 'flex' : 'none' }}>
                {
                    this.props.spinning && <img src={loadingImg} style={this.ImgStyle} />
                }
            </div>
        );
    }
}

QbSpin.propTypes = {
    compStyle: React.PropTypes.object,
    size: React.PropTypes.oneOf(['small', 'large']),
    spinning: React.PropTypes.bool,
    rate: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
};

QbSpin.defaultProps = {
    compStyle: {},
    size: 'small',
    spinning: false
}

export default QbSpin;