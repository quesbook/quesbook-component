import React, { Component } from 'react';

import emptyStar from '../assets/image/icon/star-empty@3x.png';
import filledStar from '../assets/image/icon/star-filled@3x.png';

const filledLayerStyle = {
    position: 'absolute',
    top: 0,
    left: 0
}

class QbRateStar extends Component {
    constructor(props) {
        super(props);
        this.starCounts = [0, 1, 2, 3, 4]
    }

    get layerStyle() {
        const { starWidth, gap } = this.props;
        return {
            width: (starWidth + gap) * 5
        }
    }

    get spanStyle() {
        return {
            display: 'inline-block',
            width: this.props.starWidth,
            height: this.props.starHeight,
            marginRight: this.props.gap,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
        }
    }

    get scoreStyle() {
        // Suppose that the full rate is five points, if not, please convert it manually
        const rate = this.props.rate ? Number(this.props.rate) : 0;
        const { starWidth, gap } = this.props;
        const integer = Math.floor(rate);
        const decimal = rate - integer;
        const width = (starWidth + gap) * integer + starWidth * decimal;
        return {
            width,
            overflow: 'hidden'
        }
    }

    render() {
        return (
            <div className="qb_rate_star" style={{ position: 'relative', lineHeight: 0, ...this.props.compStyle }}>
                <div className="qb_rate_star_empty_layer" style={this.layerStyle}>
                    {
                        this.starCounts.map((item) => (
                            <span key={item} style={{ ...this.spanStyle, backgroundImage: `url(${emptyStar})` }}></span>
                        ))
                    }
                </div>
                <div className="qb_rate_star_filled_layer" style={{ ...this.layerStyle, ...filledLayerStyle }}>
                    <div className="qb_rate_star_score" style={this.scoreStyle}>
                        <div style={this.layerStyle}>
                            {
                                this.starCounts.map((item) => (
                                    <span key={item} style={{ ...this.spanStyle, backgroundImage: `url(${filledStar})` }}></span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

QbRateStar.propTypes = {
    compStyle: React.PropTypes.object,
    // Suppose that the full rate is five points, if not, please convert it manually
    rate: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    starWidth: React.PropTypes.number,
    starHeight: React.PropTypes.number
};

QbRateStar.defaultProps = {
    compStyle: {},
    rate: 0,
    starWidth: 15.6,
    starHeight: 15,
    gap: 4
}

export default QbRateStar;