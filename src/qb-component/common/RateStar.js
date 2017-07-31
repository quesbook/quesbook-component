/**
 * Created by yleaf on 17/2/21.
 */
import React, { Component } from 'react';
import './RateStar.scss';

class RateStar extends Component {
    render() {
        let ratePercent = this.props.rate +'%';
        return (
			<div className="class-rate-div">
				<div className="class-rate-common">
					<div className="class-rate-star" style={{ width: ratePercent }}></div>
				</div>
			</div>
		);
    }
}

export default RateStar;


RateStar.propTypes = {
    rate: React.PropTypes.number.isRequired,
};
