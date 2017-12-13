import React, {Component} from 'react';
import Notification from 'rc-notification';
import './QbAlert.scss';
import closeIcon from '../assets/image/icon/x-icon@3x.png';

let key = 1;
let messageInstance;
Notification.newInstance({
    getContainer: ()=> {
        let div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.bottom = 0; 
        div.style.width= '100%'; 
        div.style.paddingLeft = '10px';
        div.style.paddingRight = '10px';
        div.style.pointerEvents = 'none';
        div.style.zIndex= 10002;
        document.body.appendChild(div);
        return div;
    }
}, (n) => messageInstance = n);

function close(key) {
    messageInstance.removeNotice(key);
}

function notice(title, content, duration, titleStyle, contentStyle, type) {
    let className = 'alert alert-info';
    let closable = true;
    switch (type) {
        case 'success': 
            className = 'alert alert-success';
            break;
        case 'error': 
            className = 'alert alert-danger';
            break;
        case 'info': 
            className = 'alert alert-info';
            break;
        case 'warning':
            className = 'alert alert-warning';
            break;
    }
    const key = Date.now();
    messageInstance.notice({
        content: (
            <div className={className}
                style={{maxWidth: 800,
                    width: '100%',
                    pointerEvents: 'all',
                    alignItems: 'center',
                    display: 'flex'}} role="alert">
                <div style={{display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%', position: 'absolute', right: 20}}
                    onClick={close.bind(null, key)}>
                    <img style={{height: 10}} src={closeIcon} alt='close'/>
                </div>
                <span style={titleStyle}>{title}:&nbsp;</span>
                <span style={contentStyle}>{content}</span>
            </div>
        ),
        key,
        closable,
        duration,
        onClose: ()=> {}
    });
}

export default{
    success(title, content, duration, titleStyle, contentStyle) {
        return notice(title, content, duration, titleStyle, contentStyle, 'success');
    },
    error(title, content, duration, titleStyle, contentStyle) {
        return notice(title, content, duration, titleStyle, contentStyle, 'error');
    },
    info(title, content, duration, titleStyle, contentStyle) {
        return notice(title, content, duration, titleStyle, contentStyle, 'info');
    },
    warning(title, content, duration, titleStyle, contentStyle) {
        return notice(title, content, duration, titleStyle, contentStyle, 'warning');
    },
}
