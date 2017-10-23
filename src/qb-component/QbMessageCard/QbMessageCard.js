/**
 * Created by az on 2017/7/24.
 */
import React, {Component} from 'react';
import cancelIcon from '../assets/image/icon/x-icon@3x.png';

class QbMessageCard extends Component {
    render() {
        const {title, className, content, onCancelClick, option} = this.props;
        return (
            <div className={className}
                 style={{display: option.display?'flex':'none', ...defaultStyle.frame, ...option.style}}>
                <div style={defaultStyle.cancelBtn} onClick={onCancelClick}>
                    <img style={defaultStyle.cancelIcon} src={cancelIcon} href=""/>
                </div>
                <div className="qb-message-card-title" style={defaultStyle.title}>{title}</div>
                <div className="qb-message-card-content" style={defaultStyle.content}>{content}</div>
            </div>
        )
    }
}

const defaultStyle = {
    frame: {
        width: 300,
        border: '1px solid rgba(25, 34, 48, 0.1)',
        borderRadius: 5,
        background: '#ffffff',
        flexDirection: 'column',
        position: 'relative'
    },
    cancelBtn: {
        position: 'absolute',
        top: 10,
        right: 10,
        cursor: 'pointer',
        fontSize: '1rem',
    },
    title: {
        fontWeight: 'bold',
        width: '100%',
        color: '#192230',
        padding: '15px 15px 10px 15px',
        fontSize: 26,
    },
    content: {
        color: '#192230',
        width: '100%',
        flex: 1,
        padding: '0 15px 15px',
        fontSize: '1rem',
    },
    cancelIcon: {
        height: 16,
        width: 16
    }
}

QbMessageCard.propTypes = {
    option: React.PropTypes.shape({
        style: React.PropTypes.object,
        display: React.PropTypes.bool,
    }),
    title: React.PropTypes.node,
    content: React.PropTypes.node,
    onCancelClick: React.PropTypes.func,
    className: React.PropTypes.string,
}

export default QbMessageCard;
