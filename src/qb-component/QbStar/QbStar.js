import React, {Component} from 'react';
import './QbStar.scss';

// props:  num, style
// Example
// <QbStar num="32"></QbStar>
// <QbStar num="32" style={{'borderColor': '#b9cff3', 'color': '#b9cff3', 'fontSize': '40px'}}></QbStar>
class QbStar extends Component {
    render() {
        return (
            <div className="section-star" style={this.props.style}>
                {this.props.num}
            </div>
        );
    }
}

export default QbStar;
