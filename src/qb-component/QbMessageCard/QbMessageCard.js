/**
 * Created by az on 2017/7/24.
 */
import React, {Component} from 'react';
import cancelIcon from '../assets/image/icon/x-icon@3x.png';
import './QbMessageCard.scss';

/*eslint-disable*/
class QbMessageCard extends Component {
    render() {
        const {size, title, content, display, onCancelClick, messageStyle} = this.props;
        let fontStyle = {
            titleSize: 26,
            contentSize: 18,
        };
        switch (size) {
            case 'xs':
                fontStyle = {
                    titleSize: 20,
                    contentSize: 16,
                };
                break;
            case 'lg':
                break;
        }
        return (
            <div className="qb-message-card"
                 style={{display: display?'flex':'none', ...style.frame, ...messageStyle}}>
                <div style={style.cancelBtn} onClick={onCancelClick}>
                    <img style={{height: 16, width: 16}} src={cancelIcon} href=""/>
                </div>
                <div className="qb-message-card-title" style={{...style.title, fontSize: fontStyle.titleSize,}}>{title}</div>
                <div className="qb-message-card-content" style={{...style.content, fontSize: fontStyle.contentSize}}>{content}</div>
            </div>
        )
    }
}

const style = {
    frame: {
        width: 300,
        border: '1px solid rgba(25, 34, 48, 0.1)',
        borderRadius: 5,
        background: '#ffffff',
        flexDirection: 'column',
    },
    cancelBtn: {
        position: 'absolute',
        top: 10,
        right: 10,
        cursor: 'pointer',
    },
    title: {
        fontWeight: 'bold',
        width: '100%',
        color: '#192230',
        padding: '15px 15px 10px 15px'
    },
    content: {
        color: '#192230',
        width: '100%',
        flex: 1,
        padding: '0 15px 25px 15px',
    }
}

export default QbMessageCard;
