import React, {Component} from 'react';
import Notification from 'rc-notification';
import './QbAlert.scss';

let key = 1;
let messageInstance;
Notification.newInstance({
    getContainer: ()=> {
        console.log('Tag ssss');
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

function notice(title, content, duration, titleStyle, contentStyle, type) {
    let className = 'alert alert-info';
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
    messageInstance.notice({
        content: (
            <div className={className}
                style={{maxWidth: 800, width: '100%', pointerEvents: 'all'}} role="alert">
                <span style={titleStyle}>{title}:&nbsp;</span>
                <span style={contentStyle}>{content}</span>
            </div>
        ),
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
