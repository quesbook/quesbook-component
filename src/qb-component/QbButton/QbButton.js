/**
 * Created by az on 2017/7/10.
 */
import React, {Component} from 'react';
import './QbButton.scss';

/*eslint-disable*/
class QbButton extends Component {
    constructor(props) {
        super(props);
        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
        this.mouseDownHandler = this.mouseDownHandler.bind(this);
        this.mouseOutHandler = this.mouseOutHandler.bind(this);
        this.state = {
            className : props.className?props.className.trim().split(/ +/):[],
        };
    }
    addClass(name) {
        let classNow = this.state.className;
        classNow.push(name);
        this.setState({
            className: classNow
        });
    }
    removeClass(name) {
        let classNow = this.state.className;
        let index =this.state.className.indexOf(name);
        classNow.splice(index,1);
        this.setState({
            className: classNow
        });
    }
    mouseOverHandler() {
        this.addClass('hover');
    }
    mouseOutHandler() {
        this.removeClass('hover');
    }
    mouseUpHandler() {
        this.removeClass('click');
    }
    mouseDownHandler() {
        this.addClass('click');
    }
    iconClick(e) {
        const {iconClick} = this.props;
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        return iconClick(e);
    }
    render() {
        const {label, size, clickHandler, style, fontStyle, dataTarget, dataToggle, id, children, disabled} = this.props;
        let height = 38;
        let fontSize = 21;
        let padding = '9px 26px';
        let btnSize = size?size:'default';
        switch (btnSize) {
            case 'small':
                height = 30;
                fontSize = 16;
                padding = '7px 20px';
                break;
            case 'default':
                height = 38;
                fontSize = 21;
                padding = '9px 26px';
                break;
            case 'large':
                height = 52;
                fontSize = 25;
                padding = '13px 36px';
                break;
            case 'blockLarge':
                height = 52;
                fontSize = 25;
                padding = '13px 62px';
                break;
        }
        let className = '';
        this.state.className.forEach((name)=> {
            className = className +' ' + name;
        });
        let icon = null;
        if(children) {
            icon = (
                <div style={{width: 12, height: 12, marginLeft: 10}} onClick={(e)=> this.iconClick(e)}>
                    {children}
                </div>
            )
        }
        if (disabled) {
            className = className +' disabled';
        }
        return (
            <button onMouseOver={this.mouseOverHandler}
                    onMouseOut={this.mouseOutHandler}
                    onMouseDown={this.mouseDownHandler}
                    onMouseUp={this.mouseUpHandler}
                    onClick={clickHandler?(e)=> clickHandler(e):()=>{}}
                    className={className}
                    id={id?id:null}
                    disabled={disabled}
                    style={{...privateStyle.frame, height, fontSize, padding, ...style}}
                    data-target={dataTarget?dataTarget:''}
                    data-toggle={dataToggle?dataToggle:''}>
                <div style={{...privateStyle.content, ...fontStyle}}>
                    {label}
                </div>
                {icon}
            </button>
        );
    }
}

const privateStyle = {
    frame: {
        borderRadius: 50,
        padding: 0,
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    }
};

export default QbButton;