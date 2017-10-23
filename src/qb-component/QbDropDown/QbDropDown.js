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
        console.log(props.defaultData);
        this.state = {
            selectedObj: props.defaultData,
            keyword: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        let oldDefaultValue = this.props.defaultData.value;
        let newDefaultValue = nextProps.defaultData.value;
        if (oldDefaultValue !== newDefaultValue) {
            this.setState({
                selectedObj: nextProps.defaultData
            })
        }
    }
    renderDropDownList(content) {
        const {onChange} = this.props;
        return content.map((data, index) =>
            <QbDropDownItem label={data.label} key={index} value={data.value} onClick={(data) => {
                this.setState({
                    selectedObj: data
                });
                onChange(data);
            }} />
        );
    }
    render() {
        const { option, className, btnClassName, onChange, content} = this.props;
        let children;
        if (option.inputType === 'button') {
            children = this.renderDropDownList(content);
            console.log('option.style: ', option.style);
            return (
                <div className={className + ' btn-group'} style={{position: 'relative', ...option.style}}>
                    <button type="button"
                            className={btnClassName}
                            onChange={(e) => {
                                this.setState({
                                    keyword: e.target.value
                                });
                                onChange(this.state.selectedObj);
                            }}
                            style={{
                                ...style.button.publicStyle,
                                borderRight: 0,
                                ...option.btnStyle,
                            }}>
                        {this.state.selectedObj.label}
                    </button>
                    <button type="button" style={{ ...style.button.publicStyle, borderLeft: 0}}
                            className={btnClassName + ' dropdown-toggle'} data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" style={option.dropdownStyle}>
                        {children}
                    </div>
                </div>
            );
        } else if (option.inputType === 'input') {
            let filterArray = content.filter((data) => data.label.indexOf(this.state.keyword) !== -1);
            children = this.renderDropDownList(filterArray);
            return (
                <div className={className} style={{position: 'relative', ...option.style}}>
                    <input type="text" style={{...style.input.default, ...option.inputStyle}}
                           data-toggle="dropdown" className="form-control"
                           onChange={(e) => {
                               this.setState({
                                   keyword: e.target.value
                               });
                    }} />
                    <div className="dropdown-menu dropdown-menu-right" style={option.dropdownStyle}>
                        {children}
                    </div>
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
        },
        default: {
            margin: '9px 26px',
        },
    },
    input: {
        default: {
            height: '100%',
            fontSize: 16,
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
    defaultData: {
        label: null,
        value: null,
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
    defaultData: React.PropTypes.object,
    content: React.PropTypes.array,
    onChange: React.PropTypes.func,
    className: React.PropTypes.string,
    btnClassName: React.PropTypes.string,
}

export default QbDropDown;
