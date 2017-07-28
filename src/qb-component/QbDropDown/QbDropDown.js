/**
 * Created by az on 2017/7/17.
 */
import React, {Component} from 'react';
import QbDropDownItem from './QbDropDownItem';

/*eslint-disable*/
class QbDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedObj: {
                label: props?props.defaultData.label: '' ,
                value: props?props.defaultData.value: '' ,
            },
            keyword: ''
        }
    }
    componentDidUpdate() {
        const {onChange} = this.props;
        onChange(this.state.selectedObj);
    }
    renderInputComp() {
        const {compClass,
            compStyle, inputType, btnStyle, size, inputClassName, dropdownStyle,
            content
        } = this.props;
        let children;
        if (inputType === 'button') {
            children = content.map((data, index) =>
                <QbDropDownItem label={data.label} key={index} value={data.value} onClick={(data) => this.setState({
                    selectedObj: data
                })}/>
            );
        } else if (inputType === 'input') {
            let filterArray = content.filter((data)=> {
                if (data.label.indexOf(this.state.keyword) !== -1) {
                    return true;
                } else {
                    return false;
                }
            });
            children = filterArray.map((data, index) =>
                <QbDropDownItem label={data.label} key={index} value={data.value} onClick={(data) => this.setState({
                    selectedObj: data
                })}/>
            );
        }
        switch (inputType) {
            case 'button':
                let btnClass = "btn "+ (inputClassName?inputClassName:'btn-secondary');
                let finalStyle = eval("style.button."+ (size?size:"default"));
                return (
                    <div className={compClass+ ' btn-group'} style={{height: finalStyle.height, ...compStyle}}>
                        <button type="button"
                                className={btnClass}
                                style={{...btnStyle,
                                    ...style.button.publicStyle,
                                    height: finalStyle.height,
                                    borderRight: 0,
                                    fontSize: finalStyle.fontSize}}>
                                {this.state.selectedObj.label}
                        </button>
                        <button type="button" style={{...style.button.publicStyle, borderLeft: 0,}}
                                className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu" style={dropdownStyle}>
                            {children}
                        </div>
                    </div>
                );
            case 'input':
                return (
                    <div className={compClass} style={compStyle}>
                        <input type="text" data-toggle="dropdown" className="form-control" onChange={(e)=>
                            this.setState({
                                keyword: e.target.value
                            })
                        }/>
                        <div className="dropdown-menu dropdown-menu-right" style={dropdownStyle}>
                            {children}
                        </div>
                    </div>
                );
        }
    }
    render() {
        return this.renderInputComp();
    }
}

const style = {
    button: {
        publicStyle: {
            border: '1px solid #cccccc',
            lineHeight: 1
        },
        small: {
            height: 30,
            fontSize: 16,
            margin: '7px 20px',
        },
        default: {
            height: 38,
            fontSize: 21,
            margin: '9px 26px',
        },
        large: {
            height: 52,
            fontSize: 25,
            margin: '13px 36px',
        },
        blockLarge: {
            height: 52,
            fontSize: 25,
            margin: '13px 62px',
        }
    },
};

export default QbDropDown;
