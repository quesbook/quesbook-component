import React, {Component} from 'react';
import './QbScore.scss';

// props:  score, style
// Example
// <QbScore score="32"></QbScore>
// <QbScore score="32" style={{'borderColor': '#b9cff3', 'color': '#b9cff3', 'fontSize': '40px'}}></QbScore>
class QbScore extends Component {
    render() {
        return (
            <div className="section-score" style={this.props.style}>
                <span className="score" style={this.props.styleScore}>
                    {this.props.score}
                </span>
                {this.renderContent()}
            </div>
        );
    }

    renderContent(){
        if (this.props.content) {
            return (
                <span className="content" style={this.props.styleContent}>
                    {this.props.content}
                </span>
            );
        }
    }
}

export default QbScore;
