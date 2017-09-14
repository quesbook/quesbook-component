import React, {Component} from 'react';
import Notification from 'rc-notification';
import 'rc-notification/assets/index.css';

let key = 1;
let messageInstance;

function getMessageInstance() {
    messageInstance = messageInstance || Notification.newInstance();
    return messageInstance;
}

function notice(title, content, duration, titleStyle, contentStyle) {
    let instance = getMessageInstance({});
    instance.notice({
        key,
        content: (
            <div>
                <div style={{...style.title, ...titleStyle}}>{title}</div>
                <div style={{...style.content, ...contentStyle}}>{content}</div>
            </div>
        ),
        duration,
        style: {color: '#ffffff', background: '#203a62', right: '50%'},
        onClose: ()=> {}
    });
}

export default{
    error(title, content, duration, titleStyle, contentStyle) {
        return notice(title, content, duration, titleStyle, contentStyle);
    },
}

const style = {
    title: {
        fontSize: 20
    },
    content: {
        fontSize: 14
    }
}