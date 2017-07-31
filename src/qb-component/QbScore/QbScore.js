import React, {Component} from 'react';
import './QbScore.scss';

// props:  content, style
// Example
// <QbScore content="32"></QbScore>
// <QbScore content="32" style={{'borderColor': '#b9cff3', 'color': '#b9cff3', 'fontSize': '40px'}}></QbScore>
class QbScore extends Component {
    render() {
        return (
            <div className="section-score" style={this.props.style}>
                <span className="score">
                    {this.props.content}
                </span>
            </div>
        );
    }
}

export default QbScore;
