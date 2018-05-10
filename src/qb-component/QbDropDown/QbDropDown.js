/**
 * Created by az on 2017/7/17.
 */
import React, { Component } from 'react';
import QbDropDownItem from './QbDropDownItem';
import './QbDropDown.scss';

/*eslint-disable*/
class QbDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }
    renderDropDownList(content) {
        const {onChange} = this.props;
        return content.map((data, index) =>
            <QbDropDownItem label={data.label} key={index} value={data.value} onClick={() => {
                this.setState({
                    keyword: '',
                })
                onChange(data);
            }} />
        );
    }
    renderMask() {
        const {disable} = this.props.option;
        if (disable) {
            return (
                <div style={{
                    position: 'absolute',
                    width: '100%', 
                    height: '100%', 
                    opacity: 0.1, 
                    top:0,
                    left: 0,
                    background: '#000',
                    borderRadius: 4, zIndex: 10}}/>
            );
        } else {
            return null;
        }
    }
    render() {
        const {option, className, btnClassName, onChange, content, value} = this.props;
        let children;
        let mask = this.renderMask();

        if (option.inputType === 'button') {
            children = this.renderDropDownList(content);
            let btnText = value? value.label : '';
            return (
                <div className={className + ' btn-group'}
                     style={{position: 'relative', height: 52, ...option.style}}>
                    <button type="button"
                            className={btnClassName}
                            style={{
                                ...style.button.publicStyle,
                                borderRight: 0,
                                fontFamily: 'Gotham A, Gotham B',
                                fontWeight: 500,
                                ...option.btnStyle,
                            }}>
                        {btnText}
                    </button>
                    <button type="button" 
                            style={{ ...style.button.publicStyle, borderLeft: 0}}
                            className={btnClassName + ' dropdown-toggle'} 
                            data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" style={option.dropdownStyle}>
                        {children}
                    </div>
                    {mask}
                </div>
            );
        } else if (option.inputType === 'input') {
            
            let filterArray = content.filter((data) => data.label != null && data.label.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1);
            children = this.renderDropDownList(filterArray);
            let additionIcon = null;
            let additionStyle = {borderRadius: 4};
            if (option.icon) {
                additionIcon = (
                    <span className="input-group-addon" style={{borderRight: 0, background: '#ffffff'}}>{option.icon}</span>
                );
                additionStyle = {borderLeft: 'none', borderRadius: '0 4px 4px 0'};
            }
            return (
                <div className={className + (additionIcon?'input-group':'')} style={{position: 'relative', height: 52, ...option.style}}>
                    {additionIcon}
                    <input type="text"
                        style={{...style.input.default, ...additionStyle, ...option.inputStyle}}
                        placeholder= {option.placeHolder}
                        data-toggle="dropdown" className="form-control disable"
                        value={this.state.keyword}
                        onChange={(e) => {
                            this.setState({
                                keyword: e.target.value
                            });
                    }} />
                    <div className="dropdown-menu dropdown-menu-right" style={option.dropdownStyle}>
                        {children}
                    </div>
                    {mask}
                </div>
            );
        }
    }
}

const style = {
    button: {
        publicStyle: {
            border: '1px solid #cccccc',
            lineHeight: 1,
            boderRadius: 0,
            height: '100%',
            fontSize: 20,
        },
        default: {
            margin: '9px 26px',
        },
    },
    input: {
        default: {
            height: '100%',
            fontSize: 20,
        },
    },
};

QbDropDown.defaultProps = {
    option: {
        inputType: 'button',
        style: {
            height: 52,
            width: 100,
            position: 'relative'
        },
        btnStyle: {
            fontSize: 20
        },
        inputStyle: {
            fontSize: 20
        },
        dropdownStyle: {},
    },
    content: [],
    onChange: ()=>{},
    className: '',
    btnClassName:  'btn btn-secondary',
}
QbDropDown.propTypes = {
    option: React.PropTypes.shape({
        inputType: React.PropTypes.string,
        style: React.PropTypes.object,
        btnStyle: React.PropTypes.object,
        dropdownStyle: React.PropTypes.object,
    }),
    icon: React.PropTypes.object,
    content: React.PropTypes.array,
    onChange: React.PropTypes.func,
    className: React.PropTypes.string,
    btnClassName: React.PropTypes.string,
}

export default QbDropDown;
