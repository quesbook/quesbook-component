/**
 * Created by az on 2017/7/17.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbDropDown extends Component {
    renderInputComp() {
        const {compClass, compStyle, inputType, id, btnStyle, size, inputClassName, label, inputButtonLabel, dropdownStyle} = this.props;
        switch (inputType) {
            case 'button':
                let btnClass = "btn dropdown-toggle "+ (inputClassName?inputClassName:'btn-secondary');
                let finalStyle = eval("style.button."+ (size?size:"default"));
                return (
                    <div className={compClass} style={{height: finalStyle.height, ...compStyle}}>
                        <button type="button"
                                id={id}
                                className={btnClass}
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{...btnStyle,
                                    ...style.button.publicStyle,
                                    height: finalStyle.height,
                                    fontSize: finalStyle.fontSize}}>
                                {label}
                        </button>
                        <div className="dropdown-menu" aria-labelledby={id} style={dropdownStyle}>
                            {this.props.children}
                        </div>
                    </div>
                );
            case 'input':
                return (
                    <div className={compClass} style={compStyle}>
                        <div className="input-group">
                            <input type="text" className="form-control"/>
                            <div className="input-group-btn">
                                <button style={{borderLeft: 0}} type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {inputButtonLabel}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" style={dropdownStyle}>
                                    {this.props.children}
                                </div>
                            </div>
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
