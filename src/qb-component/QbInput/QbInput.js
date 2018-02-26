/**
 * Created by az on 2017/7/12.
 */
import React, { Component } from 'react';

class QbInput extends Component {
    render() {
        const { placeHolder, className, size, style, changeHandler, children, value, isValid, errorMsg } = this.props;
        let height = 38;
        switch (size) {
            case 'small':
                height = 32;
                break;
            case 'default':
                height = 38;
                break;
            case 'large':
                height = 51;
                break;
        }
        let inputBorderStyle = isValid ? null : { borderTop: '1px solid #e07367', borderRight: '1px solid #e07367', borderBottom: '1px solid #e07367' };
        let iconBorderStyle = isValid ? null : { borderTop: '1px solid #e07367', borderLeft: '1px solid #e07367', borderBottom: '1px solid #e07367' };
        let finallClass = className ? finallClass = className + ' form-control' : 'form-control';
        let inputClass = '';
        let additionButton = null;
        let additionStyle = {};
        if (children) {
            inputClass = 'input-group';
            additionButton = (
                <span className="input-group-addon" style={{ ...iconBorderStyle, borderRight: 0, background: '#ffffff' }}>{children}</span>
            );
            additionStyle = { borderLeft: 'none' };
        }
        let errorMessage = null;
        if (!isValid) {
            errorMessage = (
                <div>{errorMsg}</div>
            )
        }
        return (
            <div>
                <div style={{ height: height }} className={inputClass}>
                    {additionButton}
                    <input type='text'
                        className={finallClass}
                        placeholder={placeHolder}
                        value={value || ''}
                        onChange={(e) => {
                            changeHandler.bind(this)(e.target.value);
                        }}
                        style={{ ...style, ...inputBorderStyle, ...additionStyle, height }} />
                </div>
                {errorMessage}
            </div>
        );
    }
}

QbInput.propTypes = {
    isValid: React.PropTypes.bool,
    errorMsg: React.PropTypes.node
};

QbInput.defaultProps = {
    isValid: true
}

export default QbInput;